<script setup lang="ts">
import { reactive, watch } from 'vue';

const state = reactive<{ [key: string]: boolean }>({
  email: true,
  desktop: false,
  product_updates: true,
  weekly_digest: false,
  important_updates: true,
});

const cards = Array.from({ length: 10 }, (v, i) => ({
  id: i + 1, // เพิ่ม ID สำหรับการ์ด
  title: `KPLUS777 ${i + 1}`,
  image: 'https://via.placeholder.com/100', // ลิงก์รูปแทนที่ได้ตามต้องการ
  typecards: `Admin`
}));

// ฟังก์ชันที่ใช้เมื่อ state เปลี่ยนแปลง
async function onChange() {
  // ทำบางอย่างกับข้อมูล
  console.log(state);
}

// ใช้ watch เพื่อติดตามการเปลี่ยนแปลงของ state
watch(() => state, onChange, { deep: true });
</script>

<template>
  <UDashboardPanelContent
    class="p-0 pb-24 divide-y divide-gray-200 dark:divide-gray-800"
  >
    <UDashboardSection class="p-5" title="เทมเพลทสำเร็จรูป">
      <div class="p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <!-- create -->
          <router-link
            to="/event/"
            class="bg-white border rounded-lg p-4 text-center shadow-md relative cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <!-- Badge -->
            <div class="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
              Admin
            </div>

            <div class="flex justify-center items-center h-36">
              <svg width="94px" height="94px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9.4C3 7.15979 3 6.03969 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03969 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V14.6C21 16.8402 21 17.9603 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.9603 21 16.8402 21 14.6 21H9.4C7.15979 21 6.03969 21 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43597 18.816C3 17.9603 3 16.8402 3 14.6V9.4Z" fill="#cccccc" fill-opacity="0.24"></path> <path d="M12 8L12 16" stroke="#999999" stroke-linejoin="round"></path> <path d="M16 12L8 12" stroke="#999999" stroke-linejoin="round"></path> </g></svg>
            </div>
            <!-- Title -->
            <h3 class="mt-4 text-lg font-bold h-16 text-primary-500">Create Chanel</h3>

            <!-- Line Login -->
            <div class="mt-2 flex items-center justify-center gap-2 text-primary-500">
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.6921 11.8974L9.10263 12.3675L9.10264 12.3675C10.0337 12.6779 10.4992 12.8331 10.8331 13.1669C11.1669 13.5008 11.3221 13.9663 11.6325 14.8974L11.6325 14.8974L12.1026 16.3079C12.887 18.6611 13.2792 19.8377 14 19.8377C14.7208 19.8377 15.113 18.6611 15.8974 16.3079L15.8974 16.3079L18.7351 7.79473C19.287 6.13894 19.563 5.31105 19.126 4.87403C18.689 4.43702 17.8611 4.71298 16.2053 5.26491L7.6921 8.10263C5.33889 8.88704 4.16228 9.27924 4.16228 10C4.16228 10.7208 5.33888 11.113 7.69209 11.8974L7.6921 11.8974Z" fill="#2A4157" fill-opacity="0.24"></path> <path d="M7.6921 11.8974L9.10263 12.3675L9.10264 12.3675C10.0337 12.6779 10.4992 12.8331 10.8331 13.1669C11.1669 13.5008 11.3221 13.9663 11.6325 14.8974L11.6325 14.8974L12.1026 16.3079C12.887 18.6611 13.2792 19.8377 14 19.8377C14.7208 19.8377 15.113 18.6611 15.8974 16.3079L15.8974 16.3079L18.7351 7.79473C19.287 6.13894 19.563 5.31105 19.126 4.87403C18.689 4.43702 17.8611 4.71298 16.2053 5.26491L7.6921 8.10263C5.33889 8.88704 4.16228 9.27924 4.16228 10C4.16228 10.7208 5.33888 11.113 7.69209 11.8974L7.6921 11.8974Z" class="h-5 w-5"  fill="currentColor" fill-opacity="0.24"></path> <path d="M9.52566 13.8419L7.46399 13.1547C7.17123 13.0571 6.84982 13.1001 6.59306 13.2713L5.50471 13.9969C4.92684 14.3821 5.08067 15.2702 5.75444 15.4386L7.70896 15.9272C7.8881 15.972 8.02798 16.1119 8.07276 16.291L8.56139 18.2456C8.72983 18.9193 9.6179 19.0732 10.0031 18.4953L10.7287 17.4069C10.8999 17.1502 10.9429 16.8288 10.8453 16.536L10.1581 14.4743C10.0586 14.1757 9.82426 13.9414 9.52566 13.8419Z" fill="#222222"></path> </g></svg>
              <span>LINE Login</span>
            </div>

            <!-- Status -->
            <div class="mt-2 text-gray-500 text-xs pb-5">
              Not Published
              <span class="inline-block w-2 h-2 bg-red-500 rounded-full ml-1"></span>
            </div>
          </router-link>
        <!-- edit -->
          <router-link
            v-for="(card, index) in cards"
            :key="card.id"
            :to="`/event/edit/${card.id}`"
            class="bg-white border rounded-lg p-4 text-center shadow-md relative cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <!-- Badge -->
            <div class="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
              Admin
            </div>

            <!-- Image -->
            <div class="flex justify-center items-center h-36">
              <svg width="95px" height="95px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#fafafa" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <mask id="mask0_1358_2927" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"> <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" fill="#000000"></path> </mask> <g mask="url(#mask0_1358_2927)"> <path d="M12.6887 14.5694L11.1918 12.9365C9.9224 11.5517 9.28772 10.8593 8.46257 10.8217C7.63742 10.7842 6.94243 11.416 5.55245 12.6796L3.63072 14.4266C3.33204 14.6981 3.1827 14.8339 3.09823 15.0102C3.08945 15.0285 3.08124 15.047 3.07359 15.0658C3 15.2469 3 15.4487 3 15.8524C3 19.5206 3 21.3546 4.08333 22.5089C4.19186 22.6246 4.30718 22.7337 4.42866 22.8356C5.64128 23.8533 7.47254 23.7515 11.1351 23.5481L14.447 23.3641C17.0575 23.219 18.3627 23.1465 19.2979 22.4901C19.7385 22.1809 20.1122 21.7859 20.3965 21.3288C21 20.3586 21 19.0514 21 16.4369V16.2426C21 15.8352 21 15.6314 20.9616 15.4382C20.9103 15.1806 20.8089 14.9357 20.6629 14.7173C20.5535 14.5535 20.4094 14.4094 20.1213 14.1213C19.4624 13.4624 19.1329 13.1329 18.7654 12.9807C18.2753 12.7777 17.7247 12.7777 17.2346 12.9807C16.8671 13.1329 16.5376 13.4624 15.8787 14.1213L15.3722 14.6278C14.7797 15.2203 14.4834 15.5166 14.1241 15.5501C14.048 15.5572 13.9713 15.5555 13.8956 15.5451C13.5381 15.4961 13.2549 15.1872 12.6887 14.5694L12.6887 14.5694Z" fill="#2A4157" fill-opacity="0.24"></path> </g> <circle cx="16" cy="9" r="2" fill="#222222"></circle> </g></svg>            </div>

            <!-- Title -->
            <h3 class="mt-4 text-lg font-bold h-16 text-primary-500">{{ card.title }}</h3>

            <!-- Line Login -->
            <div class="mt-2 flex items-center justify-center gap-2 text-primary-500">
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.6921 11.8974L9.10263 12.3675L9.10264 12.3675C10.0337 12.6779 10.4992 12.8331 10.8331 13.1669C11.1669 13.5008 11.3221 13.9663 11.6325 14.8974L11.6325 14.8974L12.1026 16.3079C12.887 18.6611 13.2792 19.8377 14 19.8377C14.7208 19.8377 15.113 18.6611 15.8974 16.3079L15.8974 16.3079L18.7351 7.79473C19.287 6.13894 19.563 5.31105 19.126 4.87403C18.689 4.43702 17.8611 4.71298 16.2053 5.26491L7.6921 8.10263C5.33889 8.88704 4.16228 9.27924 4.16228 10C4.16228 10.7208 5.33888 11.113 7.69209 11.8974L7.6921 11.8974Z" fill="#2A4157" fill-opacity="0.24"></path> <path d="M7.6921 11.8974L9.10263 12.3675L9.10264 12.3675C10.0337 12.6779 10.4992 12.8331 10.8331 13.1669C11.1669 13.5008 11.3221 13.9663 11.6325 14.8974L11.6325 14.8974L12.1026 16.3079C12.887 18.6611 13.2792 19.8377 14 19.8377C14.7208 19.8377 15.113 18.6611 15.8974 16.3079L15.8974 16.3079L18.7351 7.79473C19.287 6.13894 19.563 5.31105 19.126 4.87403C18.689 4.43702 17.8611 4.71298 16.2053 5.26491L7.6921 8.10263C5.33889 8.88704 4.16228 9.27924 4.16228 10C4.16228 10.7208 5.33888 11.113 7.69209 11.8974L7.6921 11.8974Z" class="h-5 w-5"  fill="currentColor" fill-opacity="0.24"></path> <path d="M9.52566 13.8419L7.46399 13.1547C7.17123 13.0571 6.84982 13.1001 6.59306 13.2713L5.50471 13.9969C4.92684 14.3821 5.08067 15.2702 5.75444 15.4386L7.70896 15.9272C7.8881 15.972 8.02798 16.1119 8.07276 16.291L8.56139 18.2456C8.72983 18.9193 9.6179 19.0732 10.0031 18.4953L10.7287 17.4069C10.8999 17.1502 10.9429 16.8288 10.8453 16.536L10.1581 14.4743C10.0586 14.1757 9.82426 13.9414 9.52566 13.8419Z" fill="#222222"></path> </g></svg>
              <span>LINE Login</span>
            </div>

            <!-- Status -->
            <div class="mt-2 text-gray-500 text-xs pb-5">
              Published
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full ml-1"></span>
            </div>
          </router-link>
        </div>
      </div>
    </UDashboardSection>
  </UDashboardPanelContent>
</template>
<style scoped>
/* เพิ่มการตั้งค่าเพิ่มเติมที่คุณต้องการได้ที่นี่ */
</style>
