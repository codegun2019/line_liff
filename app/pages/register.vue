<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Event" />

      <UDashboardToolbar class="py-0 px-1.5">
        <div>
          <h1>Register</h1>
          <form @submit.prevent="register">
            <div class="flex flex-col space-y-4">
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
          </form>
          <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app';

const { $supabase } = useNuxtApp();

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const register = async () => {
  try {
    const { data: { user }, error } = await $supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    if (user) {
      const { error: profileError } = await $supabase.from('profiles').insert([
        {
          id: user.id,
          email: email.value,
          username: email.value.split('@')[0],
          full_name: '',
          avatar_url: '',
        },
      ]);

      if (profileError) throw profileError;

      alert('Registration successful! Please check your email to confirm.');
    }
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>
