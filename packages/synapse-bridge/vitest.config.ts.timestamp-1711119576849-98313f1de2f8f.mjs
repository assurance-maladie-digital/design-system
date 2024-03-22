// vitest.config.ts
import { defineConfig as defineConfig2, mergeConfig } from "file:///Users/ocean/Desktop/CNAM/design-system/node_modules/.pnpm/vitest@0.34.6_jsdom@22.1.0_sass@1.67.0/node_modules/vitest/dist/config.js";

// vite.config.ts
import { defineConfig } from "file:///Users/ocean/Desktop/CNAM/design-system/node_modules/.pnpm/vite@4.4.9_@types+node@18.11.9_sass@1.67.0/node_modules/vite/dist/node/index.js";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import vue from "file:///Users/ocean/Desktop/CNAM/design-system/node_modules/.pnpm/@vitejs+plugin-vue@4.3.4_vite@4.4.9_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vuetify, { transformAssetUrls } from "file:///Users/ocean/Desktop/CNAM/design-system/node_modules/.pnpm/vite-plugin-vuetify@1.0.2_vite@4.4.9_vue@3.4.21_vuetify@3.5.9/node_modules/vite-plugin-vuetify/dist/index.js";
import dts from "file:///Users/ocean/Desktop/CNAM/design-system/node_modules/.pnpm/vite-plugin-dts@3.6.0_@types+node@18.11.9_typescript@5.0.4_vite@4.4.9/node_modules/vite-plugin-dts/dist/index.mjs";
import { visualizer } from "file:///Users/ocean/Desktop/CNAM/design-system/node_modules/.pnpm/rollup-plugin-visualizer@5.9.2/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "/Users/ocean/Desktop/CNAM/design-system/packages/synapse-bridge";
var __vite_injected_original_import_meta_url = "file:///Users/ocean/Desktop/CNAM/design-system/packages/synapse-bridge/vite.config.ts";
var vite_config_default = defineConfig(({ mode }) => {
  const config = {
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      vuetify(
        {
          autoImport: true
        }
      ),
      dts({
        rollupTypes: true
      })
    ],
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
        "@tests": fileURLToPath(new URL("./tests", __vite_injected_original_import_meta_url))
      }
    },
    build: {
      lib: {
        entry: resolve(__vite_injected_original_dirname, "src/main.ts"),
        name: "SynapseBridge",
        fileName: "synapse-bridge"
      },
      rollupOptions: {
        external: [
          "vue",
          /vuetify/
        ],
        output: {
          globals: {
            vue: "Vue",
            vuetify: "Vuetify"
          }
        }
      }
    }
  };
  if (mode === "development") {
    config.plugins.push(vuetify({
      styles: {
        configFile: "src/styles/settings.scss"
      }
    }));
  }
  if (mode === "analyze") {
    config.plugins.push(visualizer({
      filename: "dist/stats.html"
    }));
  }
  return config;
});

// vitest.config.ts
var vitest_config_default = defineConfig2((configEnv) => mergeConfig(
  vite_config_default(configEnv),
  defineConfig2({
    test: {
      environment: "jsdom",
      coverage: {
        enabled: true,
        provider: "v8",
        reportsDirectory: "./tests/unit/coverage"
      },
      server: {
        deps: {
          inline: ["vuetify"]
        }
      },
      setupFiles: ["./tests/unit/setup.ts"]
    }
  })
));
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9vY2Vhbi9EZXNrdG9wL0NOQU0vZGVzaWduLXN5c3RlbS9wYWNrYWdlcy9zeW5hcHNlLWJyaWRnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL29jZWFuL0Rlc2t0b3AvQ05BTS9kZXNpZ24tc3lzdGVtL3BhY2thZ2VzL3N5bmFwc2UtYnJpZGdlL3ZpdGVzdC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL29jZWFuL0Rlc2t0b3AvQ05BTS9kZXNpZ24tc3lzdGVtL3BhY2thZ2VzL3N5bmFwc2UtYnJpZGdlL3ZpdGVzdC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIG1lcmdlQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZydcbmltcG9ydCB2aXRlQ29uZmlnIGZyb20gJy4vdml0ZS5jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhjb25maWdFbnYgPT4gbWVyZ2VDb25maWcoXG5cdHZpdGVDb25maWcoY29uZmlnRW52KSxcblx0ZGVmaW5lQ29uZmlnKHtcblx0XHR0ZXN0OiB7XG5cdFx0XHRlbnZpcm9ubWVudDogJ2pzZG9tJyxcblx0XHRcdGNvdmVyYWdlOiB7XG5cdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdHByb3ZpZGVyOiAndjgnLFxuXHRcdFx0XHRyZXBvcnRzRGlyZWN0b3J5OiAnLi90ZXN0cy91bml0L2NvdmVyYWdlJ1xuXHRcdFx0fSxcblx0XHRcdHNlcnZlcjoge1xuXHRcdFx0XHRkZXBzOiB7XG5cdFx0XHRcdFx0aW5saW5lOiBbJ3Z1ZXRpZnknXVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2V0dXBGaWxlczogWycuL3Rlc3RzL3VuaXQvc2V0dXAudHMnXVxuXHRcdH1cblx0fSlcbikpXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9vY2Vhbi9EZXNrdG9wL0NOQU0vZGVzaWduLXN5c3RlbS9wYWNrYWdlcy9zeW5hcHNlLWJyaWRnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL29jZWFuL0Rlc2t0b3AvQ05BTS9kZXNpZ24tc3lzdGVtL3BhY2thZ2VzL3N5bmFwc2UtYnJpZGdlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9vY2Vhbi9EZXNrdG9wL0NOQU0vZGVzaWduLXN5c3RlbS9wYWNrYWdlcy9zeW5hcHNlLWJyaWRnZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgdHlwZSBQbHVnaW4gfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVldGlmeSwgeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tICd2aXRlLXBsdWdpbi12dWV0aWZ5J1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG5cdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRwbHVnaW5zOiBbXG5cdFx0XHR2dWUoe1xuXHRcdFx0XHR0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfVxuXHRcdFx0fSksXG5cdFx0XHR2dWV0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YXV0b0ltcG9ydDogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHQpLFxuXHRcdFx0ZHRzKHtcblx0XHRcdFx0cm9sbHVwVHlwZXM6IHRydWVcblx0XHRcdH0pXG5cdFx0XSxcblx0XHRkZWZpbmU6IHtcblx0XHRcdF9fVlVFX1BST0RfSFlEUkFUSU9OX01JU01BVENIX0RFVEFJTFNfXzogZmFsc2Vcblx0XHR9LFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdGFsaWFzOiB7XG5cdFx0XHRcdCdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuXHRcdFx0XHQnQHRlc3RzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3Rlc3RzJywgaW1wb3J0Lm1ldGEudXJsKSlcblx0XHRcdH1cblx0XHR9LFxuXHRcdGJ1aWxkOiB7XG5cdFx0XHRsaWI6IHtcblx0XHRcdFx0ZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL21haW4udHMnKSxcblx0XHRcdFx0bmFtZTogJ1N5bmFwc2VCcmlkZ2UnLFxuXHRcdFx0XHRmaWxlTmFtZTogJ3N5bmFwc2UtYnJpZGdlJ1xuXHRcdFx0fSxcblx0XHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdFx0ZXh0ZXJuYWw6IFtcblx0XHRcdFx0XHQndnVlJyxcblx0XHRcdFx0XHQvdnVldGlmeS9cblx0XHRcdFx0XSxcblx0XHRcdFx0b3V0cHV0OiB7XG5cdFx0XHRcdFx0Z2xvYmFsczoge1xuXHRcdFx0XHRcdFx0dnVlOiAnVnVlJyxcblx0XHRcdFx0XHRcdHZ1ZXRpZnk6ICdWdWV0aWZ5J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChtb2RlID09PSAnZGV2ZWxvcG1lbnQnKSB7XG5cdFx0Y29uZmlnLnBsdWdpbnMucHVzaCh2dWV0aWZ5KHtcblx0XHRcdHN0eWxlczoge1xuXHRcdFx0XHRjb25maWdGaWxlOiAnc3JjL3N0eWxlcy9zZXR0aW5ncy5zY3NzJ1xuXHRcdFx0fVxuXHRcdH0pIGFzIHVua25vd24gYXMgUGx1Z2luKVxuXHR9XG5cblx0aWYgKG1vZGUgPT09ICdhbmFseXplJykge1xuXHRcdGNvbmZpZy5wbHVnaW5zLnB1c2godmlzdWFsaXplcih7XG5cdFx0XHRmaWxlbmFtZTogJ2Rpc3Qvc3RhdHMuaHRtbCdcblx0XHR9KSlcblx0fVxuXG5cdHJldHVybiBjb25maWdcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1YLFNBQVMsZ0JBQUFBLGVBQWMsbUJBQW1COzs7QUNBOUMsU0FBUyxvQkFBaUM7QUFDelosU0FBUyxlQUFlO0FBQ3hCLFNBQVMsZUFBZSxXQUFXO0FBQ25DLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVcsMEJBQTBCO0FBQzVDLE9BQU8sU0FBUztBQUNoQixTQUFTLGtCQUFrQjtBQU4zQixJQUFNLG1DQUFtQztBQUE2TCxJQUFNLDJDQUEyQztBQVF2UixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN6QyxRQUFNLFNBQVM7QUFBQSxJQUNkLFNBQVM7QUFBQSxNQUNSLElBQUk7QUFBQSxRQUNILFVBQVUsRUFBRSxtQkFBbUI7QUFBQSxNQUNoQyxDQUFDO0FBQUEsTUFDRDtBQUFBLFFBQ0M7QUFBQSxVQUNDLFlBQVk7QUFBQSxRQUNiO0FBQUEsTUFDRDtBQUFBLE1BQ0EsSUFBSTtBQUFBLFFBQ0gsYUFBYTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNQLHlDQUF5QztBQUFBLElBQzFDO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUixPQUFPO0FBQUEsUUFDTixLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLFFBQ3BELFVBQVUsY0FBYyxJQUFJLElBQUksV0FBVyx3Q0FBZSxDQUFDO0FBQUEsTUFDNUQ7QUFBQSxJQUNEO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTixLQUFLO0FBQUEsUUFDSixPQUFPLFFBQVEsa0NBQVcsYUFBYTtBQUFBLFFBQ3ZDLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDZCxVQUFVO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxRQUNEO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDUCxTQUFTO0FBQUEsWUFDUixLQUFLO0FBQUEsWUFDTCxTQUFTO0FBQUEsVUFDVjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFFQSxNQUFJLFNBQVMsZUFBZTtBQUMzQixXQUFPLFFBQVEsS0FBSyxRQUFRO0FBQUEsTUFDM0IsUUFBUTtBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2I7QUFBQSxJQUNELENBQUMsQ0FBc0I7QUFBQSxFQUN4QjtBQUVBLE1BQUksU0FBUyxXQUFXO0FBQ3ZCLFdBQU8sUUFBUSxLQUFLLFdBQVc7QUFBQSxNQUM5QixVQUFVO0FBQUEsSUFDWCxDQUFDLENBQUM7QUFBQSxFQUNIO0FBRUEsU0FBTztBQUNSLENBQUM7OztBRGpFRCxJQUFPLHdCQUFRQyxjQUFhLGVBQWE7QUFBQSxFQUN4QyxvQkFBVyxTQUFTO0FBQUEsRUFDcEJBLGNBQWE7QUFBQSxJQUNaLE1BQU07QUFBQSxNQUNMLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxRQUNWLGtCQUFrQjtBQUFBLE1BQ25CO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDUCxNQUFNO0FBQUEsVUFDTCxRQUFRLENBQUMsU0FBUztBQUFBLFFBQ25CO0FBQUEsTUFDRDtBQUFBLE1BQ0EsWUFBWSxDQUFDLHVCQUF1QjtBQUFBLElBQ3JDO0FBQUEsRUFDRCxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyJdCn0K
