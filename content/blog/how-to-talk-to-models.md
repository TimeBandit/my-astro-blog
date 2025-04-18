---
external: false
draft: false
title: How to Talk to Models
description: How to Talk to Models
url: https://www.imran-nazir.com/blog/how-to-talk-to-models.md
image: https://www.imran-nazir.com/images/how-to-talk-to-models.md
imageAlt: A stylised HTMX logo graphic
date: 2025-04-06
tags: [llms, ai, machine-learning]
---

![Illustration](/images/how-to-talk-to-models.png)

## Did You Know You Can Talk to LLMs Locally? (Seriously!)

Okay, let's be honest. We've all spent way too much time staring at a screen, prompting massive language models like ChatGPT. But
what if you could have a powerful LLM _right on your computer_, without relying on an internet connection or worrying about
privacy? Turns out, you absolutely can! It's becoming increasingly accessible, and it's way cooler than you might think.

This post will walk you through getting started with running LLMs locally, focusing on two fantastic tools: Ollama and OpenWebUI.
We'll use the Gemma LLM for our examples – it's a great, open-source option that's relatively manageable for local running.

---

### Part 1: Getting Started with Ollama

Ollama is, hands down, the easiest way to get an LLM running locally. It’s designed to be super simple, and it handles all the
messy bits of downloading, setting up, and running the model.

**1. Head over to Ollama:** Go to [https://ollama.com/](https://ollama.com/)

**2. Create an Account (or Skip It):** You can sign up for a free account, or you can skip it and use the anonymous option. We'll
focus on the anonymous option for this tutorial.

**3. Download and Install:** Ollama is available for macOS, Linux, and Windows. Just download the appropriate version for your
operating system from their website.

**4. Run a Model:** This is the magic part! Once installed, open your terminal and type:

```bash
ollama run gemma
```

Ollama will automatically download the Gemma model (it's a big download, so be patient!). It will then start the LLM, and
you'll see a prompt like this:

```
>>>
```

Now you can start chatting! Try something like:

```
What is the capital of France?
```

Ollama will respond with the answer. You can keep interacting with the model through the prompt.

**5. Exploring Other Models:** Ollama has a huge library of models available. You can list them all with:

```bash
ollama list
```

You can run any of these models simply by using their names in the `ollama run` command (e.g., `ollama run llama2`).

**Key Takeaway:** Ollama is the perfect starting point. It’s incredibly easy to use and lets you quickly experiment with different
LLMs.

---

### Part 2: Adding a UI with OpenWebUI

Okay, the command-line interface is functional, but let's be honest – it's not exactly user-friendly. That's where OpenWebUI comes
in. OpenWebUI provides a beautiful, intuitive web interface for interacting with your locally running LLMs.

**1. Download OpenWebUI:** Go to [https://openwebui.com/](https://openwebui.com/) and download the appropriate version for your
operating system.

**2. Extract the Downloaded Archive:** Unzip the downloaded file.

**3. Run OpenWebUI:** Navigate to the directory where you extracted the files and run the following command in your terminal:

```bash
# Install Open WebU
pip install open-webui

# Running Open WebUI
open-webui serve
```

This will start the OpenWebUI server, and it will usually display a URL in your terminal (something like
`http://127.0.0.1:7860`).

**4. Access the Web Interface:** Open your web browser and go to the URL provided in the terminal. You should see the OpenWebUI
interface.

**5. Configure the Model:** In the OpenWebUI interface, you'll need to select the model you want to use. Make sure you've already
run the Gemma model using Ollama (as described above). OpenWebUI should automatically detect it. If not, you might need to
manually specify the Ollama URL (it's usually `http://localhost:1234`).

**6. Start Chatting!** You'll now have a full-fledged chat interface with features like history, settings, and more.

**Tips for OpenWebUI:**

- **GPU Acceleration:** If you have a compatible GPU, OpenWebUI can use it for faster inference. Make sure you have the
  necessary drivers installed.
- **Experiment with Settings:** Explore the settings to adjust parameters like temperature and max tokens. These settings
  control the creativity and length of the model's responses.

**Resources:**

- **Ollama:** [https://ollama.com/](https://ollama.com/)
- **OpenWebUI:** [https://openwebui.com/](https://openwebui.com/)
- **Gemma LLM:** [https://huggingface.co/google/gemma-7b](https://huggingface.co/google/gemma-7b) (for downloading the model)

---

Now you're ready to explore the world of local LLMs! It's a surprisingly powerful and rewarding experience. Don't be afraid to experiment, and have fun! Let us know in the comments what you're building with your local LLMs.
