"use client";
import { CustomImage } from "@/components/ui";
import { useState, ChangeEvent, DragEvent, useRef } from "react";
import { PiUploadSimpleThin } from "react-icons/pi";
import Image from "next/image";

export default function ImagesUploader() {
	const [images, setImages] = useState<File[]>([])
	const [error, setError] = useState<string | null>(null)
	const inputRef = useRef<HTMLInputElement | null>(null)
	const MAX_SIZE_MB = 1

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const files = Array.from(e.target.files)
			const validFiles = validateFiles(files)
			setImages([...images, ...validFiles])
		}
	}

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		if (e.dataTransfer.files) {
			const files = Array.from(e.dataTransfer.files)
			const validFiles = validateFiles(files)
			setImages([...images, ...validFiles])
		}
	}

	const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	const handleClick = () => {
		inputRef.current?.click()
	}

	const validateFiles = (files: File[]): File[] => {
		const validFiles = files.filter((file) => {
			if (file.size <= MAX_SIZE_MB * 1024 * 1024) {
				return true
			} else {
				setError(`El archivo ${file.name} supera el límite de 1MB`);
				return false
			}
		});
		return validFiles
	}

	return (

		<div className="w-full space-y-4 relative overflow-hidden ">
			<div className=" z-10 border-2 border-dashed border-border p-4 mt-2 rounded h-auto relative" onDrop={handleDrop} onDragOver={handleDragOver} >
				<input
					type="file"
					multiple
					accept="image/*"
					onChange={handleInputChange}
					className="hidden"
					id="image-upload"
					ref={inputRef}
				/>
				<div className="w-full  gap-2 flex-center flex-col  p-2">
					<p className="text-base">Subir Imagen</p>
					<p className="textbase text-muted-foreground text-center">Arrastra las imágenes aquí o haz clic para seleccionar</p>
					{error && <p className="text-red-500 text-sm">{error}</p>}
				</div>
				{images.length > 0 ? (
					<div className="mx-auto w-72 h-72 lg:w-80 lg:h-80 mb-8 lg:mb-2">
						<Image
							src={URL.createObjectURL(images[0])}
							alt={`Imagen ${+ 1}`}
							className="object-cover w-80 h-80 rounded"
							height={320}
							width={320}
							draggable="false"
						/>
					</div>
				) : (
					<div className='bg-black w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center shadow-2xl cursor-pointer rounded group border border-dashed border-border mx-auto hover:shadow-white/20 duration-200' onClick={handleClick}>
						<PiUploadSimpleThin size={40} className="group-hover:text-primary text-shadow-lg duration-200 bg-black " />
					</div>
				)}

				<div className="flex gap-4 flex-wrap py-2 max-w-80 justify-center lg:mx-auto">
					{images.slice(1).map((image, index) => (
						<div className="" key={index}>
							<Image
								src={URL.createObjectURL(image)}
								alt={`Imagen ${index + 1}`}
								className="object-cover w-[136px] h-[136px] lg:h-24 lg:w-24 rounded"
								height={96}
								width={96}
								draggable="false"
							/>
						</div>
					))}
					{images.length > 0 && (
						<div className='bg-black w-[136px] h-[136px] lg:h-24 lg:w-24 flex-center shadow-2xl cursor-pointer rounded group border border-dashed border-border hover:shadow-white/20 duration-200' onClick={handleClick}>
							<PiUploadSimpleThin size={28} className="group-hover:text-primary text-shadow-lg duration-200 bg-black " />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
