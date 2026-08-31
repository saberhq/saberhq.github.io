---
title: "Trans-NanoSim characterizes and simulates nanopore RNA-sequencing data"
date: 2023-09-01
draft: false
url: "/blog/nanosim/"
image: /images/art/earth.jpg
description: "Trans-NanoSim captures nanopore transcript quirks; learn how benchmarks and simulations accelerate RNA tooling workflows."
tags: [genomics]
---

# Trans-NanoSim characterizes and simulates nanopore RNA-sequencing data

Compared with second-generation sequencing technologies, third-generation single-molecule RNA sequencing has unprecedented advantages; the long reads it generates facilitate isoform-level transcript characterization. In particular, the Oxford Nanopore Technology sequencing platforms have become more popular in recent years owing to their relatively high affordability and portability compared with other third-generation sequencing technologies. To aid the development of analytical tools that leverage the power of this technology, simulated data provide a cost-effective solution with ground truth. However, a nanopore sequence simulator targeting transcriptomic data is not available yet.

We introduce Trans-NanoSim, a tool that simulates reads with technical and transcriptome-specific features learnt from nanopore RNA-sequncing data. We comprehensively benchmarked Trans-NanoSim on direct RNA and complementary DNA datasets describing human and mouse transcriptomes. Through comparison against other nanopore read simulators, we show the unique advantage and robustness of Trans-NanoSim in capturing the characteristics of nanopore complementary DNA and direct RNA reads. As a cost-effective alternative to sequencing real transcriptomes, Trans-NanoSim will facilitate the rapid development of analytical tools for nanopore RNA-sequencing data. Trans-NanoSim and its pre-trained models are freely accessible at https://github.com/bcgsc/NanoSim.