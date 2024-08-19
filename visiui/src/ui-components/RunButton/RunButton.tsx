export default function RunButton(props: {readonly onStart: () => any}) {
    return <div className="visiui-runbutton" onClick={props.onStart}>
        RUN
    </div>
}
