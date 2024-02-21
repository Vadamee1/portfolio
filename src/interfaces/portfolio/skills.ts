export interface  SkillsType {
  key: string
  section: string
  className?: string
  items: ItemsSection[]
}

export interface ItemsSection {
  key: string
  content: string
  className?: string
}