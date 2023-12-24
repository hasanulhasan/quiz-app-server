-- CreateTable
CREATE TABLE "scores" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scores_pkey" PRIMARY KEY ("id")
);
