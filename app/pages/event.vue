<script setup lang="ts">
const links = [[{
  label: 'เทมเพลตแบบเลือกเอง',
  icon: 'i-heroicons-bookmark-square',
  to: '/event',
  exact: true
}, {
  label: 'กิจกรรมทั้งหมดของฉัน',
  icon: 'i-heroicons-server-stack',
  to: '/event/list'
}, {
  label: 'เทมเพลตสำเร็จรูป',
  icon: 'i-heroicons-rocket-launch',
  to: '/event/doc'
}], [{
  label: 'คู่มือการใช้งาน',
  icon: 'i-heroicons-book-open',
  to: 'https://ui.nuxt.com/pro',
  target: '_blank'
}, {
  label: 'แพ็คเกจ',
  icon: 'i-heroicons-credit-card',
  to: 'https://ui.nuxt.com/pro/purchase',
  target: '_blank'
}]]
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Event" />

      <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
        <UHorizontalNavigation :links="links" />
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
