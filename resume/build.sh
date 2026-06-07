#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../public"

mkdir -p "$OUT_DIR"

cd "$SCRIPT_DIR"

pdflatex -interaction=nonstopmode resume.tex
pdflatex -interaction=nonstopmode resume.tex  # second pass for cross-references

cp resume.pdf "$OUT_DIR/resume.pdf"

# clean up latex build artifacts
rm -f resume.aux resume.log resume.out resume.fls resume.fdb_latexmk
