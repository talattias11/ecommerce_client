import InfoToggle from "./InfoToggel";

const infoList = [
    {
        id: 1,
        title: 'secret 1',
        content: 'I like cheese'
    },
    {
        id: 2,
        title: 'secret 2',
        content: 'I know kong fu'
    },
    {
        id: 3,
        title: 'secret 3',
        content: 'Avi Biter is the greatest'
    },
];

export default function StateDemo() {
    const infosElements = infoList.map(i => <InfoToggle key={i.id} info={i} />)

    return <div className="infos">
        {infosElements}
    </div>;
}