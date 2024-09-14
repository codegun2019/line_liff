<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Login" />

      <UDashboardToolbar class="py-0 px-1.5">
        <div class="flex flex-col items-center">
          <h1 class="text-2xl font-semibold">Login</h1>
          <form @submit.prevent="login" class="w-full max-w-md mt-4">
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
              class="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
          <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
        </div>
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp, useRouter } from '#app';

const { $supabase } = useNuxtApp();
const router = useRouter(); // Use Nuxt's useRouter for navigation

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const login = async () => {
  try {
    const { error } = await $supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    alert('Login successful!');
    router.push('/'); // Redirect to /dashboard after successful login
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
