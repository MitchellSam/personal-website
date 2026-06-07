#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../public"

mkdir -p "$OUT_DIR"

cd "$SCRIPT_DIR"

PDFLATEX=$(command -v pdflatex || echo "/Library/TeX/texbin/pdflatex")
"$PDFLATEX" -interaction=nonstopmode resume.tex
"$PDFLATEX" -interaction=nonstopmode resume.tex

cp resume.pdf "$OUT_DIR/resume.pdf"

# clean up latex build artifacts
rm -f resume.pdf resume.aux resume.log resume.out resume.fls resume.fdb_latexmk
