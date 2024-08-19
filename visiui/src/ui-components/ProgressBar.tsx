import Endpoint from "@/data-components/Endpoint";
import { Status } from "@/data-components/Status";
import { useEffect, useState } from "react";

export default function ProgressBar(props: {readonly status: Endpoint<Status>, readonly progress: Endpoint<number>}) {
    let [status, setStatus] = useState(Status.Pending);
    useEffect(() => props.status.onSet(setStatus), [props.status]);
    let [progress, setProgress] = useState(0);
    useEffect(() => props.progress.onSet(setProgress), [props.progress]);

    return (
        <div className="visiui-progressbar">
            {
                (status == Status.Running || status == Status.Complete) &&
                <div
                    className={`visiui-progressbar-fill ${status == Status.Running ? 'visiui-progressbar-running' : ''}`}
                    style={{width: `${progress * 100.0}%`}}
                />
            }
        </div>
    );
}
