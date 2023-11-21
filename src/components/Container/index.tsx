interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
