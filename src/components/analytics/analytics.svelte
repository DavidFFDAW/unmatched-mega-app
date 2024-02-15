<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	$: {
		if (browser) {
			if (!$page.url.origin.includes('localhost')) {
				const analytics = (window as any).analytics;
				if (typeof analytics !== 'undefined') {
					analytics('visit', 'Unmatched App', $page.url.pathname);
				}
			}
		}
	}
</script>

<svelte:head>
	<script async src="https://davidfernandezdeveloper.es/libs/analytics/script/analytics.base.js">
	</script>
</svelte:head>
