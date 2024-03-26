import { defineConfig,loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig((props) => {
        const env = loadEnv(props.mode, process.cwd(), "VITE_APP");
        const envWithProcessPrefix = {
            "process.env": `${JSON.stringify(env)}`,
        };

        return {
            plugins: [
                react(),
            ],
            define: envWithProcessPrefix,
        }
    })
}