const { HfInference } = require("@huggingface/inference");

const hfText = new HfInference(process.env.HUGGINGFACE_API_KEY, {
  use_cache: true,
});

const textGenController_V1 = async ({ socket, message }) => {
  try {
    // for await (const chunk of hfText.chatCompletionStream({
    //   model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    //   messages: [{ role: "user", content: message }],
    //   max_tokens: 500,
    // })) {
    //   socket.emit("generateText:response", {
    //     response: chunk.choices[0].delta.content,
    //   });
    //   // console.log(chunk.choices[0].delta.content);
    // }
    // socket.emit("generateText:complete");

    const response = await hfText.textGeneration({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      inputs: message,
      parameters: {
        max_new_tokens: 500,
      },
    });

    socket.emit("generateText:response", {
      response: response.generated_text,
    });
    console.log(response.generated_text);
  } catch (error) {
    console.error("ws:textGenController_V1", error);
    socket.emit("generateText:error");
  }
};

module.exports = textGenController_V1;
