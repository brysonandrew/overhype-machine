// utils/button.ts
import { cva } from 'class-variance-authority'

export const button = cva(
  'px-6 py-2 rounded-2xl font-semibold transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      theme: {
        neumorphicLight:
          'bg-[#e0e0e0] text-gray-800 shadow-neumorphic hover:shadow-neumorphic-hover active:shadow-neumorphic-inset',
        neumorphicDark:
          'bg-[#252525] text-white shadow-neumorphic-dark hover:shadow-neumorphic-hover-dark active:shadow-neumorphic-inset-dark',
      },
    },
    defaultVariants: {
      theme: 'neumorphicLight',
    },
  }
)