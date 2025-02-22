from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import pandas as pd

app = Flask(__name__)

# Configuration
UPLOAD_FOLDER = 'uploads'
OUTPUT_FOLDER = 'output_files'
ALLOWED_EXTENSIONS = {'csv'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['OUTPUT_FOLDER'] = OUTPUT_FOLDER

# Check if the file is a CSV
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '' or not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file type'}), 400

    # Save the uploaded file
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    # Process the file with AI model
    output_files = process_csv(filepath)

    # Assuming you return a list of file paths or URLs to the files
    return jsonify({'files': output_files}), 200

def process_csv(filepath):
    # Example: Read CSV file with pandas
    df = pd.read_csv(filepath)
    
    # Run your AI model here on the data
    # For example, let's pretend we create 3 output files based on the data

    output_files = []

    # Create 3 output CSV files (modify this according to your AI model output)
    output_file_1 = os.path.join(app.config['OUTPUT_FOLDER'], 'output1.csv')
    output_file_2 = os.path.join(app.config['OUTPUT_FOLDER'], 'output2.csv')
    output_file_3 = os.path.join(app.config['OUTPUT_FOLDER'], 'output3.csv')

    # Save dummy files for example purposes
    df.to_csv(output_file_1)
    df.to_csv(output_file_2)
    df.to_csv(output_file_3)

    # Return paths to the processed files
    return [f"/output_files/{os.path.basename(output_file_1)}",
            f"/output_files/{os.path.basename(output_file_2)}",
            f"/output_files/{os.path.basename(output_file_3)}"]

if __name__ == '__main__':
    app.run(debug=True)
