/*
  # Kurdish House London Skills Share - Initial Database Schema

  1. New Tables
    - `profiles` - User profiles with Kurdish community focus
      - `id` (uuid, references auth.users)
      - `full_name` (text)
      - `avatar_url` (text)
      - `location` (text, London areas)
      - `bio` (text)
      - `phone` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `skills` - Available skills in the platform
      - `id` (uuid, primary key)
      - `name` (text)
      - `category` (text)
      - `description` (text)
      - `created_at` (timestamp)
    
    - `skill_listings` - User skill offerings and requests
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `skill_id` (uuid, references skills)
      - `type` (enum: offering/seeking)
      - `level` (enum: beginner/intermediate/advanced)
      - `availability` (text array)
      - `location` (text)
      - `tags` (text array)
      - `is_active` (boolean)
      - `created_at` (timestamp)
    
    - `matches` - Skill matches between users
      - `id` (uuid, primary key)
      - `teacher_id` (uuid, references profiles)
      - `learner_id` (uuid, references profiles)
      - `skill_id` (uuid, references skills)
      - `status` (enum: pending/accepted/completed/cancelled)
      - `created_at` (timestamp)
    
    - `reviews` - User reviews and ratings
      - `id` (uuid, primary key)
      - `reviewer_id` (uuid, references profiles)
      - `reviewee_id` (uuid, references profiles)
      - `skill_id` (uuid, references skills)
      - `rating` (integer, 1-5)
      - `comment` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Add policies for public read access where appropriate

  3. Initial Data
    - Insert default skill categories and skills
    - Set up Kurdish community focused skills
*/

-- Create custom types
CREATE TYPE skill_type AS ENUM ('offering', 'seeking');
CREATE TYPE skill_level AS ENUM ('beginner', 'intermediate', 'advanced');
CREATE TYPE match_status AS ENUM ('pending', 'accepted', 'completed', 'cancelled');

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  avatar_url text,
  location text,
  bio text,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create skill_listings table
CREATE TABLE IF NOT EXISTS skill_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  skill_id uuid REFERENCES skills(id) ON DELETE CASCADE NOT NULL,
  type skill_type NOT NULL,
  level skill_level DEFAULT 'beginner',
  availability text[] DEFAULT '{}',
  location text,
  tags text[] DEFAULT '{}',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create matches table
CREATE TABLE IF NOT EXISTS matches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  learner_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  skill_id uuid REFERENCES skills(id) ON DELETE CASCADE NOT NULL,
  status match_status DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reviewer_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  reviewee_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  skill_id uuid REFERENCES skills(id) ON DELETE CASCADE NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Skills policies (public read)
CREATE POLICY "Skills are viewable by everyone"
  ON skills FOR SELECT
  USING (true);

-- Skill listings policies
CREATE POLICY "Skill listings are viewable by everyone"
  ON skill_listings FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own skill listings"
  ON skill_listings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own skill listings"
  ON skill_listings FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own skill listings"
  ON skill_listings FOR DELETE
  USING (auth.uid() = user_id);

-- Matches policies
CREATE POLICY "Users can view matches they're involved in"
  ON matches FOR SELECT
  USING (auth.uid() = teacher_id OR auth.uid() = learner_id);

CREATE POLICY "Users can create matches"
  ON matches FOR INSERT
  WITH CHECK (auth.uid() = teacher_id OR auth.uid() = learner_id);

CREATE POLICY "Users can update matches they're involved in"
  ON matches FOR UPDATE
  USING (auth.uid() = teacher_id OR auth.uid() = learner_id);

-- Reviews policies
CREATE POLICY "Reviews are viewable by everyone"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Users can insert reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = reviewer_id);

-- Insert default skills
INSERT INTO skills (name, category, description) VALUES
  -- Traditional Skills
  ('Kurdish Cooking', 'Traditional Skills', 'Learn authentic Kurdish recipes and cooking techniques'),
  ('Kurdish Language', 'Traditional Skills', 'Learn to speak, read, and write in Kurdish'),
  ('Traditional Music', 'Traditional Skills', 'Learn Kurdish folk songs and traditional instruments'),
  ('Handicrafts', 'Traditional Skills', 'Traditional Kurdish crafts and textile work'),
  
  -- Life Skills
  ('Cooking & Baking', 'Life Skills', 'Basic cooking skills and baking techniques'),
  ('Home Organization', 'Life Skills', 'Organizing and decluttering your living space'),
  ('Budgeting', 'Life Skills', 'Personal finance and money management'),
  ('Time Management', 'Life Skills', 'Effective planning and productivity techniques'),
  
  -- Creative Arts
  ('Photography', 'Creative Arts', 'Digital photography and photo editing'),
  ('Painting', 'Creative Arts', 'Watercolor, acrylic, and oil painting techniques'),
  ('Writing', 'Creative Arts', 'Creative writing and storytelling'),
  ('Graphic Design', 'Creative Arts', 'Digital design and visual communication'),
  
  -- Technology
  ('Web Development', 'Technology', 'HTML, CSS, JavaScript, and modern frameworks'),
  ('Mobile Apps', 'Technology', 'iOS and Android app development'),
  ('Digital Marketing', 'Technology', 'Social media marketing and online presence'),
  ('Data Analysis', 'Technology', 'Excel, data visualization, and basic analytics'),
  
  -- Health & Wellness
  ('Yoga', 'Health & Wellness', 'Hatha, Vinyasa, and restorative yoga practices'),
  ('Meditation', 'Health & Wellness', 'Mindfulness and stress reduction techniques'),
  ('Nutrition', 'Health & Wellness', 'Healthy eating and meal planning'),
  ('Fitness Training', 'Health & Wellness', 'Personal training and exercise routines'),
  
  -- Business & Career
  ('Public Speaking', 'Business & Career', 'Presentation skills and confident communication'),
  ('Leadership', 'Business & Career', 'Team management and leadership development'),
  ('Networking', 'Business & Career', 'Professional relationship building'),
  ('Interview Skills', 'Business & Career', 'Job interview preparation and techniques'),
  
  -- Languages
  ('English Conversation', 'Languages', 'Improve English speaking and pronunciation'),
  ('Arabic', 'Languages', 'Learn Arabic language and script'),
  ('Turkish', 'Languages', 'Turkish language for beginners and intermediate'),
  ('Persian', 'Languages', 'Farsi/Persian language learning'),
  
  -- Sustainable Science
  ('Environmental Science', 'Sustainable Science', 'Climate change and environmental protection'),
  ('Renewable Energy', 'Sustainable Science', 'Solar, wind, and sustainable energy systems'),
  ('Sustainable Agriculture', 'Sustainable Science', 'Organic farming and permaculture'),
  ('Green Technology', 'Sustainable Science', 'Eco-friendly innovations and solutions'),
  
  -- Policy & Law
  ('Immigration Law', 'Policy & Law', 'UK immigration policies and legal processes'),
  ('Human Rights', 'Policy & Law', 'International human rights law and advocacy'),
  ('Community Organizing', 'Policy & Law', 'Grassroots organizing and policy advocacy'),
  ('Legal Research', 'Policy & Law', 'Legal research methods and case analysis'),
  
  -- Tech & AI
  ('Machine Learning', 'Tech & AI', 'AI algorithms and machine learning fundamentals'),
  ('Data Science', 'Tech & AI', 'Python, R, and statistical analysis'),
  ('Blockchain', 'Tech & AI', 'Cryptocurrency and blockchain technology'),
  ('Cybersecurity', 'Tech & AI', 'Information security and ethical hacking');

-- Create function to handle user registration
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, full_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'New User'),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
