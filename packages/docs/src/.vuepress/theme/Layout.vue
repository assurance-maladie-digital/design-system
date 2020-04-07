<template>
	<div class="theme-container">
		<VApp>
			<VContent>
				<PageCard>
					<Content slot-key="title" />

					<p class="title font-weight-thin">
						<Content class="title font-weight-thin" slot-key="description" />
					</p>

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
