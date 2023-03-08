import { createClient, SupabaseClient } from "https://deno.land/x/supabase@1.3.1/mod.ts"


interface User {
  id: number;
  name: string;
  email: string;
}

export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    // Initialize a new instance of the Supabase client using the project URL and public API key
    const supabaseUrl = "https://your-project-url.supabase.co";
    const supabaseKey = "your-public-api-key";
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async getUsers(): Promise<User[]> {
    // Retrieve an array of all users in the 'users' table
    const { data, error } = await this.supabase.from<User>("users").select("*");
    if (error) {
      throw error;
    }
    return data || [];
  }

  async createUser(user: User): Promise<User> {
    // Create a new user in the 'users' table and return the created user object
    const { data, error } = await this.supabase.from<User>("users").insert(user);
    if (error) {
      throw error;
    }
    return data?.[0];
  }

  async updateUser(user: User): Promise<User> {
    // Update an existing user in the 'users' table and return the updated user object
    const { data, error } = await this.supabase.from<User>("users").update(user).eq("id", user.id);
    if (error) {
      throw error;
    }
    return data?.[0];
  }

  async deleteUser(id: number): Promise<void> {
    // Delete a user with the given ID from the 'users' table
    const { error } = await this.supabase.from<User>("users").delete().eq("id", id);
    if (error) {
      throw error;
    }
  }
}