import { supabase } from "./supabase";
import type { Fountain } from "../types/fountain";

const TABLE = "water_sources";

export interface WaterSourceRow {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  images: string[] | null;
  rating: number | null;
  is_operational: boolean;
  created_at?: string;
}

/** Fetch all user-uploaded water sources from Supabase. Returns Fountain[] with useAdminPin: false (use PinIcon). */
export async function fetchUserWaterSources(): Promise<Fountain[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from(TABLE)
    .select("id, name, latitude, longitude, images, rating, is_operational")
    .order("created_at", { ascending: false });
  if (error) return [];
  const rows = (data ?? []) as WaterSourceRow[];
  return rows.map((row) => rowToFountain(row));
}

function rowToFountain(row: WaterSourceRow): Fountain {
  return {
    id: row.id,
    name: row.name,
    latitude: row.latitude,
    longitude: row.longitude,
    images: row.images ?? undefined,
    imageUrl: row.images?.[0],
    rating: row.rating ?? undefined,
    isOperational: row.is_operational ?? true,
    useAdminPin: false,
  };
}

export interface InsertWaterSourceInput {
  name: string;
  latitude: number;
  longitude: number;
  images: string[];
  rating?: number | null;
}

/** Insert a user-uploaded water source. Returns the new Fountain or null. */
export async function insertWaterSource(
  input: InsertWaterSourceInput
): Promise<Fountain | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from(TABLE)
    .insert({
      name: input.name.trim(),
      latitude: input.latitude,
      longitude: input.longitude,
      images: input.images,
      rating: input.rating ?? null,
      is_operational: true,
    })
    .select("id, name, latitude, longitude, images, rating, is_operational")
    .single();
  if (error) throw error;
  return data ? rowToFountain(data as WaterSourceRow) : null;
}
