import { generateClasses } from "@formkit/themes";

const config = {
  config: {
    classes: generateClasses({
      global: {
        label: "block font-bold text-lg mb-1",
        message: "text-red-500 mb-5",
        wrapper: "space-y-2 mb-5",
        input: "w-full p-3 border border-gray-300 rounded-lg text-gray placeholder-gray-400"

      },
      file: {
        noFiles: 'block my-2',
        fileItem: 'hidden'
      },
      submit:{
        input:'$reset bg-green-400 hover:bg-green-500 w-full p-2 font-bold uppercase text-lg transition disabled:opacity-50'
      }
    }),
  },
};

export default config;
