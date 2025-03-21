import Image from "next/image";
import { Button, Spinner } from "@heroui/react";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { abahAuth } from "../../lib/actions";

export default function WeekForm({ setAuth, week }) {
  const ref = useRef(null);

  const [state, dispatch] = useFormState(abahAuth.bind(null, week), {
    isError: null,
    response: null,
  });

  useEffect(() => {
    if (state.isError === false) {
      toast.success(state.response, {
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      });
      setAuth(true);
    }
    if (state.isError === true)
      toast.error(state.response, {
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      });
  }, [state]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:w-[450px] w-[90vw] p-6 rounded-3xl border shadow-2xl items-center bg-white mb-10 relative">
        <Image
          src={"/logos/Logo Full Colour.png"}
          width={400}
          height={300}
          className="mx-auto"
          alt="EYW logo"
        />
        <div className="flex w-[80%] md:w-[70%] text-center mt-6 mb-2 text-eywnavy-1000 font-medium">
          <p>
            Please provide the pin for {makeTitle(week)} to view its content.
          </p>
        </div>
        <form
          className="flex flex-col w-full items-center"
          action={(formData) => {
            dispatch(formData);
            ref.current?.reset();
          }}
          ref={ref}
        >
          <input
            className="w-[80%] md:w-[70%] p-4 h-12 rounded-xl bg-[#DDEDE9] mt-6"
            type="text"
            name="pin"
            placeholder="Pin"
            autoComplete="false"
            maxLength={4}
          />
          <SubmitBtn />
        </form>
      </div>
    </>
  );
}

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Spinner className="flex mt-4 w-full" size="lg" />
      ) : (
        <Button
          type="submit"
          className="flex w-[45%] md:w-[35%] bg-[#77B7A8] text-white text-lg font-light mx-auto mt-6"
          radius="md"
        >
          View Content
        </Button>
      )}
    </>
  );
}

function makeTitle(slug) {
  var words = slug.split("-");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
}
