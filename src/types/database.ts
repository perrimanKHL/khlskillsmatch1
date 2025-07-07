export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          location: string | null
          skills_offered: string[] | null
          skills_wanted: string[] | null
          rating: number | null
          total_reviews: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          skills_offered?: string[] | null
          skills_wanted?: string[] | null
          rating?: number | null
          total_reviews?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          skills_offered?: string[] | null
          skills_wanted?: string[] | null
          rating?: number | null
          total_reviews?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      skills: {
        Row: {
          id: string
          name: string
          category: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          description?: string | null
          created_at?: string
        }
      }
      skill_matches: {
        Row: {
          id: string
          teacher_id: string
          learner_id: string
          skill_id: string
          status: 'pending' | 'accepted' | 'completed' | 'cancelled'
          message: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          teacher_id: string
          learner_id: string
          skill_id: string
          status?: 'pending' | 'accepted' | 'completed' | 'cancelled'
          message?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          teacher_id?: string
          learner_id?: string
          skill_id?: string
          status?: 'pending' | 'accepted' | 'completed' | 'cancelled'
          message?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
