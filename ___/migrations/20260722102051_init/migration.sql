/*
  Warnings:

  - The `type` column on the `Car` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CarType" AS ENUM ('SUV', 'Sedan', 'Hatchback', 'Coupe', 'Convertible', 'Truck', 'Van', 'Wagon', 'EV', 'Other');

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "type",
ADD COLUMN     "type" "CarType";
