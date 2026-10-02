---
title: About
short: about
description: "I'm Saber Hafezqorani, a research scientist in genomics, data science, and machine learning, now building Sidechain for Arc's Virtual Cell Challenge 2026."
layout: about
# Body headings render plain: no "Back to top" link (see layouts/_default/_markup/render-heading.html)
bookHeadingAnchor: false
# The words at the top of the page, top to bottom. Edit freely.
# kicker: the small mono line (shown in capitals). heading: the big pixel line; a full stop at
# the end is drawn in vermillion. lede: the sentence under it.
kicker: "About · Saber Hafezqorani"
heading: "Hi, I’m Saber."
lede: "A research scientist in genomics, data science, and machine learning, now building Sidechain for Arc’s Virtual Cell Challenge 2026."
# The label over the text below (the home page carries the short version)
longLabel: "The long version"
resume: /resume/
# The photo: a square picture in this folder, at least 448px wide, shown as a circle
photo: profile.jpg
photoAlt: "Saber Hafezqorani with a warm smile, in a cream fleece jacket, outdoors in front of a purple-grey painted wall."
# Link previews (Open Graph) use the photo
images:
  - profile.jpg
# The topic tags close the long version. To add more sections later, put a <!--more--> line
# after the text below, then one "## heading" per section: each gets its own ruled block.
topics:
  - Perturb-seq
  - representation learning
  - long-read RNA-seq
topicAccent: Virtual Cell Challenge
---

My name is Saber and I’m a research scientist with years of experience in genomics, data science, and machine learning. During my year at Genentech (gRED), I co-led the analysis of two genome-wide, multi-million-cell single-cell CRISPR Perturb-seq screens. Because every design choice in a Perturb-seq pipeline — QC thresholds, confounder correction, statistical modeling, dimensionality reduction — changes the biology you end up inferring, I also built tooling to make those consequences visible: a CLI that renders interactive dashboards comparing outcomes across parameter sweeps, plus a sweep orchestrator for Nextflow pipelines on HPC.

More recently, I have been building [`Sidechain`](https://github.com/saberhq/sidechain), my solo entry in Arc’s Virtual Cell Challenge 2026. My first paper (Nucleic Acids Research, 2016) modeled how RNA-binding proteins and microRNAs jointly govern transcript fate, and Sidechain is my bet that this post-transcriptional layer — written in sequence, and therefore stable across cell contexts — is a prior most perturbation-response models leave on the table.

I earned my Ph.D. in Bioinformatics at the University of British Columbia (UBC), where I was advised by [Prof. Dr. Inanc Birol](https://www.bcgsc.ca/people/inanc-birol), working at the [Bioinformatics Technology Lab](https://www.birollab.ca/). During my Ph.D., I broadly worked on developing computational tools and software solutions for next-generation long-read sequencing technologies. My doctoral dissertation (see [here](https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0444844)) was focused on utilizing machine learning in transcriptome analysis, and my time at the BC Cancer Genome Sciences Centre produced [`ntEmbd`](https://github.com/BirolLab/ntEmbd), a deep learning embedding model for nucleotide sequences, and [`NanoSim`](https://github.com/BirolLab/NanoSim), a long-read simulation suite the field uses for benchmarking (62,000+ downloads). Before starting at UBC, I received my M.Sc. in Bioinformatics from [METU](https://ii.metu.edu.tr/), where I was advised by Dr. Hilal Kazan and Dr. Yesim Aydin Son. My B.Sc. was in Information Technology Engineering.

This personal website is my notebook in public, where I share my journey in personal life and professional career. Say hi and stay in touch :)
