import { useTranslation } from "next-i18next";
import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import { BsCpu, BsFillCpuFill, BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { MdSmartDisplay } from "react-icons/md";

import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
	const { t } = useTranslation();
	const { widget } = service;
	const { data, error } = useWidgetAPI(widget, null);

	if (error) {
		return <Container service={service} error={error} />;
	}

	if (!data) {
		return (
			<Container service={service}>
				{/* <Block label="yourwidget.key1" />
				<Block label="yourwidget.key2" />
				<Block label="yourwidget.key3" /> */}
			</Container>
		);
	}

	// console.log('DATA: ', data);

	return (
		<>
			{/* <div className="flex flex-col pb-1 mx-1">
				<div className="text-theme-700 dark:text-theme-200 text-xs relative h-5 w-full rounded-md bg-theme-200/50 dark:bg-theme-900/20 mt-1">
					<span className="absolute left-2 text-xs mt-[2px]">{t("common.number", {value: data.key1})}</span>
				</div>
				{true && (
					<div className="text-theme-700 dark:text-theme-200 text-xs relative h-5 w-full rounded-md bg-theme-200/50 dark:bg-theme-900/20 mt-1">
						<span className="absolute left-2 text-xs mt-[2px]">{data.key2}</span>
					</div>
				)}
			</div> */}



			{/* <div className="text-theme-700 dark:text-theme-200 relative h-5 w-full rounded-md bg-theme-200/50 dark:bg-theme-900/20 mt-1 flex">
				<div className="absolute h-5 rounded-md bg-theme-200 dark:bg-theme-900/40 z-0" style={{ width: `50%`, }} />
					<div className="text-xs z-10 self-center ml-1">
						<BsPauseFill className="inline-block w-4 h-4 cursor-pointer -mt-[1px] mr-1 opacity-80" />
					</div>
				<div className="text-xs z-10 self-center ml-2 relative w-full h-4 grow mr-2">
					<div className="absolute w-full whitespace-nowrap text-ellipsis overflow-hidden" title={"stream title"}>
						{"stream title"}
					</div>
				</div>

				<div className="self-center text-xs flex justify-end mr-1.5 pl-1 z-10" style={{background: "red", borderRadius: "3px", padding: "2px"}}>
						22
				</div>
				<div className="self-center text-xs flex justify-end mr-2 z-10">{"text"}</div>
			</div> */}

			{data.map && data.map((item, index) => (
				<div key={index} className="text-theme-700 dark:text-theme-200 relative h-5 w-full rounded-md bg-theme-200/50 dark:bg-theme-900/20 mt-1 flex">
					<div className="text-xs z-10 self-center ml-2 relative w-full h-4 grow mr-2">
							{item.name}
					</div>

					{item.results && item.results.map((result, index) => (
						<Result key={index} result={result}/>
					))}
				</div>
			))}



			{/* <div className="w-full text-center">
				<div className="flex-col text-xs">
					<span>Last Updated: </span>
				</div>
			</div> */}

		{/* <Container service={service}>
			<Block label="Key 1" value={t("common.number", { value: data.key1 })} />
			<Block label="key2" value={t("common.number", { value: data.key2 })} />
		</Container> */}
		</>
	);
}

function Result(props) {

	console.log('RESULT: ', props);

	let background = "";
	switch (props.result.colour) {
		case "green":
			background = "green";
			break;
		case "amber":
			background = "#fb8f24ff";
			break;
		case "red":
			background = "red";
			break;
	}
	let value = props.result.value;

	return (
		<div className="self-center text-xs flex justify-center mr-1.5 pl-1 z-10" style={{background: background, borderRadius: "3px", padding: "2px", width:"40px"}}>
				&nbsp;{value}&nbsp;
		</div>
	)
}