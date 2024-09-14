<script setup lang="ts">

import { sub } from 'date-fns'
import type { Period, Range } from '~/types'


import { ref, onMounted } from 'vue';
import { useNuxtApp, useRouter } from '#app';

const { $supabase } = useNuxtApp();
const router = useRouter();

const email = ref('');
const full_name = ref('');
const errorMessage = ref('');

// Fetch the logged-in user's email and full name on component mount
onMounted(async () => {
  try {
    // Fetch the current authenticated user
    const { data: { user }, error: userError } = await $supabase.auth.getUser();

    if (userError) {
      throw userError;
    }

    if (user) {
      // Set the email from the user object
      email.value = user.email;
      // Attempt to fetch the full_name from the profiles table using the user's id
      const { data: profile, error: profileError } = await $supabase
        .from('profiles')
        .select('full_name')
        .eq('email', user.email) // Use the user's id to query the profiles table
        .single(); // Fetch a single profile matching the user ID

      // Check if profile data is returned
      if (profileError || !profile) {
        console.log('Profile not found or no matching rows.');
        errorMessage.value = 'Profile not found or user has no full name set.';
      } else {
        // Set and log the full_name
        full_name.value = profile.full_name;
        console.log('Full Name:', full_name.value);
      }
    } else {
      // Redirect to login if the user is not authenticated
      router.push('/login');
    }
  } catch (error) {
    errorMessage.value = error.message || 'Error fetching user data.';
    console.error(error); // Log the error for debugging
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

const { isNotificationsSlideoverOpen } = useDashboard()

const items = [[{
  label: 'New mail',
  icon: 'i-heroicons-paper-airplane',
  to: '/inbox'
}, {
  label: 'New user',
  icon: 'i-heroicons-user-plus',
  to: '/users'
}]]

const range = ref<Range>({ start: sub(new Date(), { days: 14 }), end: new Date() })
const period = ref<Period>('daily')
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home ">
        <template #right>
          <UTooltip
            text="Notifications"
            :shortcuts="['N']"
          >
            <UButton
              color="gray"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen = true"
            >
              <UChip
                color="red"
                inset
              >
                <UIcon
                  name="i-heroicons-bell"
                  class="w-5 h-5"
                />
              </UChip>
            </UButton>
          </UTooltip>

          <UTooltip
            text="Notifications"
            :shortcuts="['U']"
          >
            <UButton
              color="gray"
              variant="ghost"
              square
            >
                <UIcon
                  name="i-heroicons-user"
                  class="w-5 h-5"
                />
                {{ full_name || 'N/A' }}
            </UButton>
          </UTooltip>

          <UDropdown :items="items">
            <UButton
              icon="i-heroicons-plus"
              size="md"
              class="ml-1.5 rounded-full"
            />
          </UDropdown>
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
          <!-- ~/components/home/HomeDateRangePicker.vue -->
          <HomeDateRangePicker
            v-model="range"
            class="-ml-2.5"
          />

          <!-- ~/components/home/HomePeriodSelect.vue -->
          <HomePeriodSelect
            v-model="period"
            :range="range"
          />
        </template>
      </UDashboardToolbar>
    
      <UDashboardPanelContent>
        <button
        @click="logout"
        class="mb-4 px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Logout 
      </button>
        <!-- ~/components/home/HomeChart.vue -->
        <HomeChart
          :period="period"
          :range="range"
        />

        <div class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8">
          <!-- ~/components/home/HomeSales.vue -->
          <HomeSales />
          <!-- ~/components/home/HomeCountries.vue -->
          <HomeCountries />
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
