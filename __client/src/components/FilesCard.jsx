import axios from "axios";
import fileIcon from "../assets/files.png";

const FilesCard = ({data, index}) => {
    let {name, extension, creationDate} = data;

    const handleFileDownload = (filename) => {
        axios.post("http://localhost:3000/api/download", {
            filename,
            username: state.user
        }, {
            responseType: 'blob' // Indicar que esperamos una respuesta de tipo blob (binario)
        })
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
            <div className="Archivo mt-3 text-white bg-slate-800 py-3 mt-2 px-8 rounded-xl hover:bg-slate-700 transition-[500ms] cursor-pointer" key={index} onClick={() => handleFileDownload(name + `.${extension}`)}>
                <div className="flex flex-row items-center gap-x-3">
                    <img src={fileIcon} alt="" width={30} height={30} />
                    <h2 className="font-bold">{name}</h2>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <h5 className="mt-3">{creationDate}</h5>
                    <h5 className="mt-3 px-5 py-2 bg-slate-700 rounded-lg">.{extension}</h5>
                </div>
            </div>
    );
}
 
export default FilesCard;