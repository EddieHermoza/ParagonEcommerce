"use client";

import React, { ChangeEvent, useRef, useState, DragEvent } from "react";
import { PiUploadSimpleThin } from "react-icons/pi";
import Image from "next/image";
type Props = {
  title: string;
  description: string;
  recomendation: string;
};

export default function ImageCategoryUploader(props: Props) {
  const [imageCategory, setImageCategory] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const MAX_SIZE_MB = 1;

  const { title, description, recomendation } = props;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setImageCategory(file);
      }
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setImageCategory(file);
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
    <div className="bg-black w-full h-full space-y-2 overflow-hidden p-7">
      <div className="z-10 border-2 border-dashed border-gray-400 p-8 rounded h-full flex flex-col justify-center">
        <div className="w-full gap-2 flex-center flex-col p-2 my-4 text-center">
          <h3 className="text-xl tracking-tight leading-none">{title}</h3>
          <p className="text-neutral-400">{description}</p>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <div
          className="bg-black max-w-[400px] h-full max-h-[400px] aspect-square m-auto flex-center flex-col shadow-2xl cursor-pointer rounded group border border-dashed border-neutral-700 mx-auto hover:shadow-neutral-700/50 duration-300"
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
          {imageCategory ? (
            <div className="relative w-full h-full max-w-[400px] max-h-[400px] bg-neutral-900 flex-center">
              <Image
                src={URL.createObjectURL(imageCategory)}
                alt={`Imagen ${+1}`}
                className="w-full h-full object-cover rounded"
                draggable="false"
              />
            </div>
          ) : (
            <>
              <PiUploadSimpleThin
                size={40}
                className="group-hover:text-aorus text-shadow-lg duration-300 bg-black"
              />
              <span className="group-hover:text-aorus text-shadow-lg duration-300 bg-black text-center">
                {recomendation}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
