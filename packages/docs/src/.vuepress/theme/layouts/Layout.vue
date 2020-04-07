<template>
	<div class="theme-container">
		<VApp>
			<VNavigationDrawer
				app
				fixed
				clipped
			/>

			<VContent>
				<PageCard width="1200px">
					<Content slot-key="title" />

					<Content class="title mb-8" slot-key="description" />

					<VDivider class="mb-5" />

					<Content />
				</PageCard>
			</VContent>
		</VApp>
	</div>
</template>

<style lang="scss">
	#app {
		background: #eee;
	}
</style>
