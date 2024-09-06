"use client";

import { ChangeEvent, useRef, useState, DragEvent } from "react";
import { PiUploadSimpleThin } from "react-icons/pi";
import Image from "next/image";
type Props = {
  type: string;
  recomendation: string;
  aspect: string;
  size: number;
};

export default function BannerUploader(props: Props) {
  const [banner, setBanner] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const MAX_SIZE_MB = 1;

  const { type, recomendation, aspect, size } = props;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setBanner(file);
      }
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setBanner(file);
      }
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const validateFile = (file: File): boolean => {
    if (file.size <= MAX_SIZE_MB * 1024 * 1024) {
      setError("");
      return true;
    } else {
      setError(`El archivo ${file.name} supera el límite de 1MB`);
      return false;
    }
  };

  return (
    <div className="h-full w-full  border p-10 space-y-5 flex flex-col items-center  relative rounded">
      <div className="w-full gap-2 flex-center flex-col p-2  text-center">
        <span>{type}</span>
        <span>{recomendation}</span>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div
        className={`relative h-auto w-full bg-black  flex-center shadow-2xl cursor-pointer rounded group border border-dashed border-neutral-700 mx-auto hover:shadow-neutral-700/50 duration-300`}
        style={{ maxWidth: `${size}px`, aspectRatio: aspect }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
          id="image-upload"
          ref={inputRef}
        />
        {banner ? (
          <div
            className={`relative h-auto w-full bg-neutral-900  flex-center`}
            style={{ maxWidth: `${size}px`, aspectRatio: aspect }}
          >
            <Image
              src={URL.createObjectURL(banner)}
              alt={`Imagen ${+1}`}
              className="w-full h-full rounded"
              draggable="false"
            />
          </div>
        ) : (
          <PiUploadSimpleThin size={40}  className="group-hover:text-aorus"/>
        )}
      </div>
    </div>
  );
}
