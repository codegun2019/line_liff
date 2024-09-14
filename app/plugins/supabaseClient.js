import { createClient } from '@supabase/supabase-js'

// ตั้งค่า Supabase ด้วย URL และ Anon Key ของคุณ
const supabaseUrl = 'https://tayycopuitfclylcdkca.supabase.co' // URL จริงของ Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRheXljb3B1aXRmY2x5bGNka2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNTQwMzgsImV4cCI6MjA0MTgzMDAzOH0.hdsPP-_cZqX9fCz-xvsoEafOsJxaTM1UzDAqBXkTlAU' // Anon Key ของคุณ

// สร้าง Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ใช้ Nuxt Plugin เพื่อเพิ่ม Supabase ให้กับ Nuxt App
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('supabase', supabase)
})
