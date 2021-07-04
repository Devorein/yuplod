import { Typography } from "@material-ui/core";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import "./style.scss";

export interface UploadProps {
  onLoad: (result: string, file: File) => any
  postRead: (files: any[]) => void
  className?: string
  uploadMessage?: string,
  accept?: string[],
  maxFiles?: number
}

export default function Upload(props: UploadProps) {
  const { uploadMessage, className, onLoad, postRead, maxFiles = 1 } = props;

  const onDrop = (acceptedFiles: any) => {
    const filePromises: Promise<any>[] = [];
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();
      filePromises.push(new Promise((resolve, reject) => {
        reader.onabort = () => reject('file reading was aborted');
        reader.onerror = () => reject('file reading has failed');
        reader.onload = () => {
          const { result } = reader;
          if (result) {
            try {
              const data = onLoad(result as string, file);
              if (data !== null && data !== undefined)
                resolve(data);
            } catch (err: any) {
              console.log("An error occurred")
            }
          }
        }
      }));
      reader.readAsText(file);
    });

    Promise.all(filePromises).then(files => {
      postRead(files);
    });
  };

  const useDropZoneOptions: DropzoneOptions = { onDrop, accept: props.accept ?? [".yml", ".yaml", "application/json"] };

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone(useDropZoneOptions)
  let borderColor = '#404040';
  if (isDragAccept)
    borderColor = '#00e676';
  if (isDragReject)
    borderColor = '#ff1744';
  if (isDragActive)
    borderColor = '#2196f3';

  const rootProps = getRootProps()

  rootProps.maxFiles = maxFiles;

  return <Typography component="div" variant="h6" style={{ borderColor }} className={`Upload bold bg-light ${className ?? ''}`} {...rootProps as any}>
    <input {...getInputProps()} />
    {
      isDragActive ?
        <p>Drop the files here ...</p> :
        <p>{uploadMessage ?? `Drag 'n' drop some files here, or click to upload files (.jpg or .png files)`}</p>
    }
  </Typography>
}