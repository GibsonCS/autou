import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";

export default function Form() {
  type FormInputs = {
    title: string;
    description: string;
    file: File;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleForm = async (data: FormInputs) => {
    console.log(data);
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit(handleForm)}
      className="sm:w-2xl w-full"
    >
      <div className="rounded-lg bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800/50 dark:outline-white/10 dark:focus-within:outline-indigo-500">
        <input
          id="title"
          {...register("title", { required: "Este campo é obrigatório" })}
          type="text"
          placeholder="Assunto do email"
          className="block w-full px-3 pt-2.5 text-lg font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-white dark:placeholder:text-gray-500"
        />
        {errors.title && (
          <span className="p-2 text-sm text-red-300">
            {errors.title.message}
          </span>
        )}

        <textarea
          id="description"
          {...register("description", {
            required: "O campo descrição é obrigatório",
          })}
          placeholder="Escreva a descrição..."
          className="block w-full resize-none px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:text-white dark:placeholder:text-gray-500"
          defaultValue={""}
        />
        {errors.description && (
          <span className="p-2 text-sm text-red-300">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between space-x-3 px-2 py-2 sm:px-3 dark:border-white/10">
        <div className="flex">
          <PaperClipIcon
            aria-hidden="true"
            className="mr-2 -ml-1 size-5 text-gray-100 dark:group-hover:text-gray-100"
          />
          <input
            type="file"
            {...register("file", {
              required: "O envio do arquivo em pdf é obrigatório.",
            })}
            className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400 dark:text-gray-500"
          />
          {errors.file && (
            <span className="text-sm text-red-300">{errors.file.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="p-2 items-center rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
