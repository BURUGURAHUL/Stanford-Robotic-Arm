'use client';
import renderMathInElement from 'katex/dist/contrib/auto-render';
import 'katex/dist/katex.min.css';
import { useEffect, useRef } from 'react';
import React from 'react'

const KatexSpan = ({ text, ...delegated }) => {
    const katexTextRef = useRef();
    useEffect(() => {
        if (katexTextRef.current) {
          renderMathInElement(katexTextRef.current, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
            ],
          });
        }
      }, [text]);
    return (
        <div ref={katexTextRef} {...delegated}>
          {text}
        </div>
      );
}

export default KatexSpan
