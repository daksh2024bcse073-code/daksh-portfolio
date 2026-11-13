// Lightweight portfolio card. Avoid per-pointer-event layout reads on every card.
export default function Card({ children, className = '', as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`spotlight relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
