<template>
	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
	>
		<template #additional-informations>
			<VSpacer />

			<p class="white--text mt-8 mb-0">
				Profil complété à 50%
			</p>

			<VProgressLinear
				:value="50"
				color="#fff"
				height="8px"
				class="mt-2 mb-1"
				background-color="#fff"
				background-opacity=".24"
			/>
		</template>
	</SubHeader>
</template>
