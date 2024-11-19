

<script>
	import { user } from '$lib/store/userState.svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

  // Reactive state using Svelte 5 runes
  let activeDropdown = $state(/** @type {string | null} */ (null));
  let phoneNumber = $state('+1 (352)');
  let showDialer = $state(false);
  let showCallingDropdown = false;
  let contacts = [
    {
      name: 'Melinda Nelson',
      type: 'Office',
      number: '(HubSpot number)',
      extension: '+1'
    },
    {
      name: 'Melinda Nelson',
      type: 'HubSpot',
      number: '(HubSpot number)',
      extension: '+1'
    },
    {
      name: 'External',
      type: 'External',
      number: '(External number)',
      extension: '+1'
    }
  ];

  let navigationLinks = [
    { label: 'Home', active: true },
    { label: 'Contacts', active: false },
    { label: 'Calendar', active: false },
    { label: 'Projects', active: false },
    { label: 'Tasks', active: false }
  ];

  function handleCallClick() {
    showDialer = !showDialer;
    showCallingDropdown = false;
  }

  /**
	 * @param {string} number
	 */
  function handleNumberClick(number) {
    phoneNumber = number;
    showCallingDropdown = false;
  }

  // Close dropdowns when clicking outside
  onMount(() => {
    const handleClickOutside = ( event) => {
      if (!event.target.closest('.dropdown-container')) {
        activeDropdown = null;
        showDialer = false;
        showCallingDropdown = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2.5 shadow-sm">
  <div class="flex items-center justify-between">
    <!-- Left section -->
    <div class="flex items-center space-x-4">
      <div class="text-blue-600 dark:text-blue-400 font-bold text-xl">CRM</div>
      
      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-2">
        {#each navigationLinks as link}
          <button class="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white whitespace-nowrap {
            link.active ? 'border-b-2 border-blue-600 dark:border-blue-400 font-medium' : ''
          }">
            {link.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Right section with calling feature -->
    <div class="flex items-center space-x-3">
      <!-- Calling Button with Dropdown -->
      <div class="relative dropdown-container">
        <button
          onclick={handleCallClick}
          class="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Call"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>

        <!-- Dialer -->
        {#if showDialer}
          <div
            class="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50"
            transition:fade
          >
            <div class="p-4">
              <!-- Number Input -->
              <div class="flex items-center mb-4">
                <div class="flex-1">
                  <input
                    type="text"
                    bind:value={phoneNumber}
                    class="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <button class="ml-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white" aria-label="Clear number">
                  <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <!-- Dialer Grid -->
              <div class="grid grid-cols-3 gap-4">
                {#each Array.from('123456789*0#') as digit}
                  <button
                    class="w-full h-12 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    onclick={() => phoneNumber += digit}
                  >
                    {digit}
                  </button>
                {/each}
              </div>

              <!-- Call button -->
              <button class="w-full mt-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Call
              </button>

              <!-- Recent contacts -->
              <div class="mt-4 border-t pt-4 dark:border-gray-600">
                <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recent</div>
                {#each contacts as contact}
                  <button
                    class="w-full text-left p-2 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-md"
                    onclick={() => handleNumberClick(contact.extension)}
                  >
                    <div class="text-sm font-medium">{contact.name}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">{contact.type} • {contact.number}</div>
                  </button>
                {/each}
              </div>
            </div>
          </div>
        {/if}
      </div>

      <!-- Other Icons -->
      <button class="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Search">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      <button class="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative" aria-label="Notifications">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
      </button>

      <!-- Profile -->
      <div class="relative dropdown-container">
        <button
          onclick={() => activeDropdown = activeDropdown === 'profile' ? null : 'profile'}
          class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-700 hover:bg-blue-200 dark:hover:bg-blue-600"
        >
          <span class="text-sm font-medium text-blue-600 dark:text-blue-300">MD</span>
        </button>

        {#if activeDropdown === 'profile'}
          <div
            class="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50"
            transition:slide
          >
            <div class="p-4 border-b dark:border-gray-600">
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-700 flex items-center justify-center">
                    <span class="text-blue-600 dark:text-blue-300 font-medium">MD</span>
                  </div>
                </div>
                <div>
                  <div class="font-medium text-gray-900 dark:text-white">MD RIAZ {user.info.name}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">md.riaz@example.com</div>
                </div>
              </div>
            </div>

            <div class="py-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                Profile
              </a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                Settings
              </a>
              <a href="/auth/logout" class="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600">
                Sign out
              </a>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</nav>