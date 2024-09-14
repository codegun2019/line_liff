<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Dashboard" />

      <UDashboardToolbar class="py-0 px-1.5">
        <div class="flex flex-col items-center">
          <h1 class="text-2xl font-semibold">Welcome to Your Dashboard</h1>
          <p v-if="email" class="mt-4">Logged in as: {{ email }}</p>

          <button
            @click="logout"
            class="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Logout
          </button>

          <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
        </div>
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp, useRouter } from '#app';

const { $supabase } = useNuxtApp();
const router = useRouter();

const email = ref('');
const errorMessage = ref('');

// Fetch the logged-in user's email on component mount
onMounted(async () => {
  try {
    const { data: { user } } = await $supabase.auth.getUser();
    
    if (user) {
      email.value = user.email;
    } else {
      // Redirect to login if user is not authenticated
      router.push('/login');
    }
  } catch (error) {
    errorMessage.value = 'Error fetching user data.';
  }
});

// Logout function
const logout = async () => {
  try {
    const { error } = await $supabase.auth.signOut();

    if (error) throw error;

    alert('You have been logged out.');
    router.push('/login'); // Redirect to login page after logout
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
