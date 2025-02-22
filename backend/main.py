
# from fastapi import FastAPI, File, UploadFile
# from fastapi.responses import FileResponse, JSONResponse
# from fastapi.middleware.cors import CORSMiddleware
# import pandas as pd
# from sentence_transformers import SentenceTransformer, util
# import torch
# import shutil
# import os
# import uvicorn

# app = FastAPI()

# # Allow frontend to access the API
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Allow all origins (change this in production)
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # ------------------------- Configuration -------------------------
# SIMILARITY_MODEL_NAME = "sentence-transformers/paraphrase-multilingual-mpnet-base-v2"
# SIMILARITY_THRESHOLD = 0.75
# DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# # Load the Sentence Transformer model
# print("🔄 Loading similarity model...")
# similarity_model = SentenceTransformer(SIMILARITY_MODEL_NAME).to(DEVICE)
# print("✅ Model loaded successfully.")

# # Directories to store files
# UPLOAD_DIR = "uploads"
# RESULTS_DIR = "results"
# os.makedirs(UPLOAD_DIR, exist_ok=True)
# os.makedirs(RESULTS_DIR, exist_ok=True)

# # ------------------------- Helper Functions -------------------------
# def preprocess_text(text):
#     """Basic text preprocessing."""
#     if pd.isna(text):
#         return ""
#     return str(text).lower().strip()

# def get_best_match(new_embedding, reference_embeddings, reference_titles):
#     """Find the best match for a given new job suggestion."""
#     similarities = util.pytorch_cos_sim(new_embedding, reference_embeddings)[0]
#     best_match_idx = similarities.argmax().item()
#     best_match_score = similarities[best_match_idx].item()

#     return {
#         "best_match": reference_titles[best_match_idx] if best_match_score >= SIMILARITY_THRESHOLD else "Other",
#         "score": best_match_score,
#         "exists": best_match_score >= SIMILARITY_THRESHOLD
#     }

# def process_file(file_path):
#     """Process uploaded file and return classification results."""
#     print(f"📂 Processing file: {file_path}")

#     try:
#         df_jobs = pd.read_excel(file_path, dtype=str)
#         if "activity" not in df_jobs.columns:
#             return {"error": "Missing 'activity' column in uploaded file"}

#         new_jobs = df_jobs["activity"].dropna().str.strip().tolist()

#         # ------------------------- Load Reference Data -------------------------
#         existing_jobs_df = pd.read_csv("Model/merged_data.csv", dtype=str)
#         rejected_jobs_df1 = pd.read_excel("Model/Commerce_no_numbers.xlsx", header=None, dtype=str)
#         rejected_jobs_df2 = pd.read_csv("Model/Bita9a_Mihanya (2).csv", header=None, dtype=str)

#         # Prepare reference jobs
#         existing_jobs = existing_jobs_df["name_activity"].dropna().str.strip().tolist()
#         rejected_jobs = rejected_jobs_df1[0].dropna().str.strip().tolist() + rejected_jobs_df2[0].dropna().str.strip().tolist()

#         # Encode reference jobs
#         reference_titles = existing_jobs + rejected_jobs
#         reference_embeddings = similarity_model.encode(reference_titles, convert_to_tensor=True)

#         results = {"accepted": [], "rejected": [], "proposed": []}

#         # ------------------------- Process Each New Job -------------------------
#         for job in new_jobs:
#             job_embedding = similarity_model.encode(job, convert_to_tensor=True)
#             match_result = get_best_match(job_embedding, reference_embeddings, reference_titles)

#             result_entry = {
#                 "activity": job,
#                 "best_match": match_result["best_match"],
#                 "confidence_score": round(match_result["score"], 3)
#             }

#             # Classify into accepted, rejected, or proposed
#             if match_result["exists"]:
#                 if match_result["best_match"] in rejected_jobs:
#                     results["rejected"].append(result_entry)
#                 else:
#                     results["accepted"].append(result_entry)
#             else:
#                 results["proposed"].append(result_entry)

#         # ------------------------- Save Results to CSV -------------------------
#         accepted_file = f"{RESULTS_DIR}/accepted_jobs.csv"
#         rejected_file = f"{RESULTS_DIR}/rejected_jobs.csv"
#         proposed_file = f"{RESULTS_DIR}/proposed_jobs.csv"

#         pd.DataFrame(results["accepted"]).to_csv(accepted_file, index=False, encoding="utf-8-sig")
#         pd.DataFrame(results["rejected"]).to_csv(rejected_file, index=False, encoding="utf-8-sig")
#         pd.DataFrame(results["proposed"]).to_csv(proposed_file, index=False, encoding="utf-8-sig")

#         print("✅ Processing complete.")

#         return {
#             "message": "Processing complete!",
#             "accepted_file": f"http://127.0.0.1:8000/results/accepted_jobs.csv",
#             "rejected_file": f"http://127.0.0.1:8000/results/rejected_jobs.csv",
#             "proposed_file": f"http://127.0.0.1:8000/results/proposed_jobs.csv"
#         }

#     except Exception as e:
#         return {"error": f"Processing error: {e}"}

# @app.post("/upload/")
# async def upload_file(file: UploadFile = File(...)):
#     """Handles file upload and processing."""
#     file_location = f"{UPLOAD_DIR}/{file.filename}"
#     with open(file_location, "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     return process_file(file_location)

# @app.get("/results/{filename}")
# async def get_results(filename: str):
#     """Serve processed CSV results."""
#     file_path = f"{RESULTS_DIR}/{filename}"
#     if os.path.exists(file_path):
#         return FileResponse(file_path, media_type="text/csv", filename=filename)
#     return JSONResponse(content={"error": "File not found"}, status_code=404)

# if __name__ == "__main__":
#     uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)


from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from sentence_transformers import SentenceTransformer, util
import torch
import shutil
import os
import uvicorn

app = FastAPI()

# Allow frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change this in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------- Configuration -------------------------
SIMILARITY_MODEL_NAME = "sentence-transformers/paraphrase-multilingual-mpnet-base-v2"
SIMILARITY_THRESHOLD = 0.83  # Updated threshold
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# Load the Sentence Transformer model
print("🔄 Loading similarity model...")
similarity_model = SentenceTransformer(SIMILARITY_MODEL_NAME).to(DEVICE)
print("✅ Model loaded successfully.")

# Directories to store files
UPLOAD_DIR = "uploads"
RESULTS_DIR = "results"
os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(RESULTS_DIR, exist_ok=True)

# ------------------------- Helper Functions -------------------------
def preprocess_text(text):
    """Basic text preprocessing."""
    if pd.isna(text):
        return ""
    return str(text).lower().strip()

def get_best_match(input_embedding, reference_embeddings, reference_titles, threshold):
    """Find the best match for a given new job suggestion."""
    similarities = util.pytorch_cos_sim(input_embedding, reference_embeddings)[0]
    best_match_idx = similarities.argmax().item()
    best_match_score = similarities[best_match_idx].item()

    return {
        "best_match": reference_titles[best_match_idx] if best_match_score >= threshold else "Other",
        "score": best_match_score,
        "exists": best_match_score >= threshold
    }

def process_file(file_path):
    """Process uploaded file and return classification results."""
    print(f"📂 Processing file: {file_path}")

    try:
        df_jobs = pd.read_excel(file_path, dtype=str)
        if "activity" not in df_jobs.columns:
            return {"error": "Missing 'activity' column in uploaded file"}

#         # ------------------------- Load Reference Data -------------------------
        existing_jobs_df = pd.read_csv("Model/merged_data.csv", dtype=str)
        rejected_jobs_df1 = pd.read_excel("Model/Commerce_no_numbers.xlsx", header=None, dtype=str)
        rejected_jobs_df2 = pd.read_csv("Model/Bita9a_Mihanya (2).csv", header=None, dtype=str)

        # Prepare reference jobs
        french_titles = existing_jobs_df["name_activity"].dropna().str.strip().tolist()
        arabic_titles = existing_jobs_df["ar_name_activity"].dropna().str.strip().tolist()
        rejected_jobs_1 = rejected_jobs_df1[0].dropna().str.strip().tolist()
        rejected_jobs_2 = rejected_jobs_df2[0].dropna().str.strip().tolist()

        # Combine references
        all_existing_titles = [preprocess_text(title) for title in french_titles + arabic_titles]
        all_rejected_titles = [preprocess_text(title) for title in rejected_jobs_1 + rejected_jobs_2]

        all_reference_titles = all_existing_titles + all_rejected_titles
        reference_embeddings = similarity_model.encode(all_reference_titles, convert_to_tensor=True)

        results = {"accepted": [], "rejected": [], "proposed": []}

        # ------------------------- Process Each New Job -------------------------
        for _, row in df_jobs.iterrows():
            activity = preprocess_text(row["activity"])

            if not activity:
                continue

            # Encode the new job
            job_embedding = similarity_model.encode(activity, convert_to_tensor=True)
            match_result = get_best_match(job_embedding, reference_embeddings, all_reference_titles, SIMILARITY_THRESHOLD)

            result_entry = {
                "activity_name": activity,
                "best_match": match_result["best_match"],
                "confidence_score": round(match_result["score"], 3),
            }

            # Classify into accepted, rejected, or proposed
            if match_result["exists"]:
                if match_result["best_match"] in all_rejected_titles:
                    result_entry["category"] = "rejected because has rejistre comercial or hirafi"
                    results["rejected"].append(result_entry)
                else:
                    result_entry["category"] = "exist"
                    results["accepted"].append(result_entry)
            else:
                result_entry["category"] = "new proposed"
                results["proposed"].append(result_entry)

        # ------------------------- Save Results to CSV -------------------------
        accepted_file = f"{RESULTS_DIR}/accepted_jobs.csv"
        rejected_file = f"{RESULTS_DIR}/rejected_jobs.csv"
        proposed_file = f"{RESULTS_DIR}/proposed_jobs.csv"

        pd.DataFrame(results["accepted"]).to_csv(accepted_file, index=False, encoding="utf-8-sig")
        pd.DataFrame(results["rejected"]).to_csv(rejected_file, index=False, encoding="utf-8-sig")
        pd.DataFrame(results["proposed"]).to_csv(proposed_file, index=False, encoding="utf-8-sig")

        print("✅ Processing complete.")

        return {
            "message": "Processing complete!",
            "accepted_file": f"http://127.0.0.1:8000/results/accepted_jobs.csv",
            "rejected_file": f"http://127.0.0.1:8000/results/rejected_jobs.csv",
            "proposed_file": f"http://127.0.0.1:8000/results/proposed_jobs.csv"
        }

    except Exception as e:
        return {"error": f"Processing error: {e}"}

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    """Handles file upload and processing."""
    file_location = f"{UPLOAD_DIR}/{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return process_file(file_location)

@app.get("/results/{filename}")
async def get_results(filename: str):
    """Serve processed CSV results."""
    file_path = f"{RESULTS_DIR}/{filename}"
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="text/csv", filename=filename)
    return JSONResponse(content={"error": "File not found"}, status_code=404)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
