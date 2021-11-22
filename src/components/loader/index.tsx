import ClipLoader from "react-spinners/ClipLoader";

type Props = {
    loading: boolean
}

export const Loader = ({loading}: Props) => {
    return <ClipLoader color="#fff" loading={loading} css="margin-top: 25px; " size={50}/>
}