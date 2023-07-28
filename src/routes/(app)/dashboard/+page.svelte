<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

Welcome to Dashboard! {data.username}
