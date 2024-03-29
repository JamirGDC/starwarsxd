"""empty message

Revision ID: 17b2da6f9802
Revises: 
Create Date: 2024-01-31 18:39:34.218704

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '17b2da6f9802'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('province',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user_be',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('province_id', sa.Integer(), nullable=True),
    sa.Column('img', sa.String(length=120), nullable=True),
    sa.Column('banner', sa.String(length=120), nullable=True),
    sa.Column('mangoid', sa.Integer(), nullable=True),
    sa.Column('mangoidwallet', sa.Integer(), nullable=True),
    sa.Column('nombre', sa.String(length=120), nullable=True),
    sa.Column('apellido', sa.String(length=120), nullable=True),
    sa.Column('perfildone', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['province_id'], ['province.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('price', sa.Float(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('province_id', sa.Integer(), nullable=True),
    sa.Column('images_urls', sa.String(length=2000), nullable=True),
    sa.ForeignKeyConstraint(['province_id'], ['province.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user_be.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('products_categories',
    sa.Column('product_id', sa.Integer(), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['category_id'], ['category.id'], ),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.PrimaryKeyConstraint('product_id', 'category_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('products_categories')
    op.drop_table('product')
    op.drop_table('user_be')
    op.drop_table('province')
    op.drop_table('category')
    # ### end Alembic commands ###
