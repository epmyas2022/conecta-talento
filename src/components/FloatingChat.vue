<template>
  <!-- FAB Button -->
  <button
    class="fab-btn bg-linear-to-r from-blue-500 to-blue-600"
    @click="isOpen = !isOpen"
    aria-label="Abrir chat"
  >
    <svg
      v-if="!isOpen"
      class="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z"
      />
    </svg>
    <svg
      v-else
      class="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  <!-- Chat Window -->
  <Transition name="chat-pop">
    <div v-if="isOpen" class="chat-window">
      <!-- Header -->
      <div class="chat-header">
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="logo" class="header-logo" />
          <div>
            <p class="header-name">Asistente Conecta Talento</p>
            <p class="header-status">
              <span
                class="status-dot"
                :class="{ 'dot-loading': isLoading }"
              ></span>
              {{ isLoading ? "Escribiendo..." : "En línea" }}
            </p>
          </div>
        </div>
        <button class="close-btn" @click="isOpen = false">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Deep Chat -->
      <deep-chat
        class="w-full h-full"
        id="conecta-chat-fab"
        :history="history"
        :connect="generateConfig()"
        :requestInterceptor="requestInterceptor"
        :responseInterceptor="responseInterceptor"
        style="height: 100%; width: 100%; border: none; background: #ffffff"
        :textInput="{
          placeholder: {
            text: 'Escribe tu consulta...',
          },
          styles: {
            container: {
              padding: '4px',
            },
          },
        }"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import "deep-chat";

import SYSTEM_PROMPT from "@/context/index";

const history = ref<{ role: string; text: string }[]>([
  {
    role: "ai",
    text: "👋 Preguntame lo que necesites sobre Conecta Talento.",
  },
]);

const isOpen = ref(false);
const isLoading = ref(false);

const groq_key = ref("");

onMounted(async () => {
  try {
    const response = await fetch(
      "https://conecta-talento.free.beeceptor.com/groq",
    );
    const data = await response.json();
    groq_key.value = data.key_demo;
  } catch (error) {
    console.error("Error fetching GROQ key:", error);
  }
});
const GROQ_MODEL = "qwen/qwen3-32b";

const generateConfig = () => ({
  url: "https://api.groq.com/openai/v1/chat/completions",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${groq_key.value}`,
  },
  stream: true,
  additionalBodyProps: {
    model: GROQ_MODEL,
    temperature: 0.7,
    stream: true,
    reasoning_effort: "none",
  },
});

const requestInterceptor = (request: any) => {
  // Agregar el mensaje del usuario al historial antes de enviar la solicitud
  const messages = request.body.messages || [];

  request.body.messages = [
    {
      role: "system",
      content: SYSTEM_PROMPT,
    },
    ...messages.map((msg: any) => ({
      role: msg.role,
      content: msg.text,
    })),
  ];

  return request;
};

const responseInterceptor = (response: any) => {
  const content = response?.choices?.[0]?.delta?.content;

  return {
    text: content,
  };
};
</script>

<style scoped>
.fab-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.chat-window {
  position: fixed;
  bottom: 92px;
  right: 28px;
  z-index: 9998;
  width: 360px;
  height: 520px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
}

.header-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.header-name {
  font-size: 13px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.header-status {
  font-size: 11px;
  color: #6b7280;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  display: inline-block;
  transition: background 0.3s;
}

.status-dot.dot-loading {
  background: #f59e0b;
  animation: blink 0.8s ease-in-out infinite;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  transition:
    color 0.15s,
    background 0.15s;
}

.close-btn:hover {
  color: #374151;
  background: #f3f4f6;
}

.chat-body {
  flex: 1;
  overflow: hidden;
  min-height: 0;
}

.chat-quick {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 12px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  flex-shrink: 0;
}

.quick-chip {
  padding: 4px 11px;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #374151;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}

.quick-chip:hover {
  border-color: #36b3fa;
  color: #36b3fa;
  background: #eff6ff;
}

.chat-pop-enter-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(0.34, 1.4, 0.64, 1);
}
.chat-pop-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}
.chat-pop-enter-from,
.chat-pop-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.97);
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

@media (max-width: 600px) {
  .chat-window {
    right: 12px;
    left: 12px;
    width: auto;
    bottom: 80px;
    height: 70vh;
    max-height: 520px;
    border-radius: 14px;
  }

  .fab-btn {
    right: 16px;
    bottom: 16px;
  }
}

@media (max-width: 380px) {
  .chat-window {
    right: 8px;
    left: 8px;
    bottom: 76px;
    height: 75vh;
    border-radius: 12px;
  }

  .fab-btn {
    right: 12px;
    bottom: 12px;
    width: 46px;
    height: 46px;
  }
}
</style>
