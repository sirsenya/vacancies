-- CreateTable
CREATE TABLE "Vacancy" (
    "id" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "salary" MONEY NOT NULL,
    "description" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "schedule" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,

    CONSTRAINT "Vacancy_pkey" PRIMARY KEY ("id")
);
