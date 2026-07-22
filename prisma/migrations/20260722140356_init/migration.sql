-- CreateEnum
CREATE TYPE "CarType" AS ENUM ('SUV', 'Sedan', 'Hatchback', 'Coupe', 'Convertible', 'Truck', 'Van', 'Wagon', 'EV', 'Other');

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "make" TEXT,
    "model" TEXT,
    "year" INTEGER,
    "type" "CarType",
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
