import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import banner from '@/lib/sanity/schema/banner';
const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
	title: 'Padma Clone',
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
	basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH as string,
	plugins: [deskTool()],
	schema: {
		types: [banner],
	},
});
export default config;
