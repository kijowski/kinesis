import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { GITHUB_LINK } from "../lib/constants";
import { keyMetadata, defaultKeymap, KeyToken } from "../lib/keyboard";
import { parseMapping, Mapping } from "../lib/parser";
import { useState } from "react";

const kindToStyle = (kind: string) => {
  switch (kind) {
    case "modifier":
      return "bg-blue-100";
    case "macro":
      return "bg-green-100";
    case "inmappable":
      return "bg-gray-300";
    case "layer":
      return "bg-red-100";
    case "t&h":
      return "bg-yellow-100";
    default:
      return "bg-accent-1";
  }
};

const FullKeyboard = ({ remaps }: { remaps: Mapping }) => {
  const [layer, setLayer] = useState<"top" | "keypad">("top");
  const { fn, main, thumb } = defaultKeymap[layer];
  const renderKey = (item: KeyToken, idx: number) => {
    const keyToken = remaps.remaps[item] ?? { kind: "original", to: item };
    let keyStyle = "";
    let keyLabel = "";
    let tokenLabel = "";

    const isRemapped = keyToken.kind !== "original";
    switch (keyToken.kind) {
      case "original":
        const okeyData = keyMetadata[keyToken.to];
        keyStyle = kindToStyle(okeyData.apperance);
        keyLabel = okeyData.label;
        tokenLabel = item;
        break;
      case "simple":
        const keyData = keyMetadata[keyToken.to];
        keyStyle = kindToStyle(keyData.apperance);
        keyLabel = keyData.label;
        tokenLabel = `${keyToken.to} (${item})`;
        break;
      case "macro":
        keyStyle = kindToStyle("macro");
        keyLabel = keyToken.macroId;
        tokenLabel = item;
        break;
      case "t&h":
        keyStyle = kindToStyle("t&h");
        keyLabel = `${keyToken.tap}-${keyToken.delay}ms-${keyToken.hold}`;
        tokenLabel = item;
        break;
    }
    return (
      <div
        key={idx}
        className={`${keyStyle} ${
          isRemapped ? "border-red-500" : "border-black"
        } flex flex-col border text-center p-2 items-center justify-center rounded`}
      >
        <span className="font-bold">{keyLabel}</span>
        <span className="self-end text-xs">{tokenLabel}</span>
      </div>
    );
  };
  return (
    <div className="hand w-full">
      <div className="top-row">{fn.map(renderKey)}</div>
      <div className="keyboard">{main.map(renderKey)}</div>
      <div className="thumb">{thumb.map(renderKey)}</div>
      <button
        type="button"
        className="w-1/6 place-self-end border text-base font-medium rounded-l-md text-black hover:bg-gray-100 px-4 py-2 bg-red-100"
        onClick={() => setLayer(layer === "top" ? "keypad" : "top")}
      >
        Current layer: {layer}
      </button>
    </div>
  );
};

const Faq = () => (
  <div className="mx-auto">
    <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12">
      FAQs
    </h2>
    <ul className="grid grid-cols-2 grid-rows-2 gap-8">
      <li className="">
        <p className="text-lg font-medium leading-6 text-gray-900">
          What is it?
        </p>
        <p className="mt-2">
          <p className="text-base leading-6 text-gray-500">
            This website is a simple tool to help Kinesis Advantage2 owners with
            visualisation of their remap files.
          </p>
        </p>
      </li>
      <li className="">
        <p className="text-lg font-medium leading-6 text-gray-900">
          How to use it?
        </p>
        <p className="mt-2">
          <p className="text-base leading-6 text-gray-500">
            You can write your key remaps and macros into the input file
            textarea. The tool will show updated keybindings and list out all of
            the macros that it could parse. You can toggle between layers with
            button in lower right corner.
          </p>
        </p>
      </li>
      <li className="">
        <p className="text-lg font-medium leading-6 text-gray-900">
          Where can I learn more about remapping keys on Advantage2?
        </p>
        <p className="mt-2">
          <p className="text-base leading-6 text-gray-500">
            <a
              className="font-bold hover:underline"
              href="https://kinesis-ergo.com/support/advantage2/"
            >
              Official manual
            </a>{" "}
            is the best place to start. You will learn how to create a different
            kinds of key remaps and how load your mapping file onto the keyboard
            itself.
          </p>
        </p>
      </li>
      <li className="">
        <p className="text-lg font-medium leading-6 text-gray-900">
          Is this an official tool?
        </p>
        <p className="mt-2">
          <p className="text-base leading-6 text-gray-500">
            Absolutely not - this is just a quick tool that I've created to
            scratch my own itch. I think that it's pretty useful, but couple
            things are missing (like better macro validation). Contributions on{" "}
            <a className="font-bold hover:underline" href={GITHUB_LINK}>
              Github
            </a>{" "}
            are welcome.
          </p>
        </p>
      </li>
    </ul>
  </div>
);

const Index = () => {
  const [input, setInput] = useState("");
  const [mapping, setMapping] = useState<Mapping>({
    remaps: {},
    errors: [],
    macros: [],
  });
  const handleInputChange = (inp: string) => {
    setInput(inp);
    const parsedMapping = parseMapping(inp);
    setMapping(parsedMapping);
  };
  return (
    <>
      <Layout>
        <Head>
          <title>Kinesis Advantage2 remapping helper</title>
        </Head>
        <Container>
          <h1 className="text-5xl text-center font-bold">
            Kinesis Advantage2 remapping helper
          </h1>
          <FullKeyboard remaps={mapping} />
          <div className="grid grid-cols-3 gap-10 items-stretch justify-items-stretch w-full min-h-full">
            <label className="text-gray-700" htmlFor="name">
              <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-6">
                Input file
              </h2>
              <textarea
                className={`flex-1 appearance-none border ${
                  mapping.errors.length > 0 && "bg-red-200"
                } border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                id="comment"
                placeholder="Enter your remaps"
                name="comment"
                rows={5}
                cols={40}
                value={input}
                onChange={(e) => handleInputChange(e.target.value)}
              ></textarea>
            </label>
            <div className="flex flex-col">
              <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-6">
                Errors
              </h2>
              <table className="table bg-white border rounded-lg">
                <thead>
                  <tr>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      Line #
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      Error
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mapping.errors.map(({ line, message }) => (
                    <tr className="text-gray-700">
                      <td className="border-b-2 p-4 dark:border-dark-5">
                        {line}
                      </td>
                      <td className="border-b-2 p-4 dark:border-dark-5">
                        {message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-6">
                Macros
              </h2>
              <table className="table bg-white border rounded-lg">
                <thead>
                  <tr>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      Macro id
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      Macro body
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mapping.macros.map(({ macroId, body }) => (
                    <tr className="text-gray-700">
                      <td className="border-b-2 p-4 dark:border-dark-5">
                        {macroId}
                      </td>
                      <td className="border-b-2 p-4 dark:border-dark-5">
                        {body}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Faq />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
