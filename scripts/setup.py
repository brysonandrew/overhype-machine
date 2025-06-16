import os
import subprocess
import sys

venv_dir = "venv"
pip_path = os.path.join(venv_dir, "bin", "pip") if os.name != "nt" else os.path.join(venv_dir, "Scripts", "pip.exe")

# Create venv
subprocess.run([sys.executable, "-m", "venv", venv_dir], check=True)

# Install requirements
subprocess.run([pip_path, "install", "--upgrade", "pip"], check=True)
subprocess.run([pip_path, "install", "-r", "requirements.txt"], check=True)